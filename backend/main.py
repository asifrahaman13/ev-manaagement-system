from fastapi import FastAPI
from sqlmodel import Session, select
from models import EV, User, Reserve, Contact, Admin
from connection import create_db_and_tables
from fastapi.middleware.cors import CORSMiddleware
from connection import engine
from fastapi import HTTPException
import datetime
from fastapi import HTTPException
import time

# Create the instance for the FastAPI
app = FastAPI()

headers = {
    "Accept-Language": "en-US,en;q=0.9",
    "Connection": "keep-alive",
    "Referer": "https://trackapi.nutritionix.com/docs/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    "accept": "application/json",
    "sec-ch-ua": '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
}

# Added multiple origins to remove the cors errors which we may encounter later

origins = [
    "http://localhost",
    "http://127.0.0.1",
    "http://127.0.0.1:8000",
    "http://localhost:8000",
    "http://localhost:3000",
    "http://localhost:8000/api",
    "http://192.168.140.47:3001/frontend-repo",
    "http://192.168.140.47:3001/frontend-repo/",
    "http://192.168.140.47:3001",
    "http://192.168.140.47:3001/",
    "https://64a178ed0103a8595d4991db--calm-trifle-e24af9.netlify.app/",
    "https://64a178ed0103a8595d4991db--calm-trifle-e24af9.netlify.app",
    "*",
]


# Middleware to pass on the cors error and to check the credentials
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Trigger the event of startup the application
@app.on_event("startup")
def on_startup():
    # Crete the database and table on starting the application
    create_db_and_tables()


@app.post("/")
def createAdmin(admin: Admin):
    with Session(engine) as session:
        session.add(admin)
        session.commit()
        session.refresh()
        return admin


# API for the post request
@app.post("/postevdata/")
def createData(EV: EV):
    res = admin_auth(EV.username, EV.password)
    print(res)
    if res == False:
        raise HTTPException(status_code=404, detail="You are forbidden to do this.")
    # Start the session
    with Session(engine) as session:
        # Add the data
        session.add(EV)
        # Commit the changes
        session.commit()
        # Refresh the data.
        session.refresh(EV)
        return EV


def admin_auth(username, password):
    with Session(engine) as session:
        statement = select(Admin.password).where(Admin.username == username)
        statement = session.exec(statement).first()

        if password == statement:
            return True
        return False


# API for the post request
@app.post("/postadmin/")
def createData(admin: Admin):
    # Start the session
    print(admin)
    with Session(engine) as session:
        statement = select(Admin.username)
        statement = session.exec(statement).first()
        if statement != None:
            return {"message": "Sorry there is already an admin"}
        # Add the data
        session.add(admin)
        # Commit the changes
        session.commit()
        # Refresh the data.
        session.refresh(Admin)
        return admin


# API for the post request
@app.post("/postuserdata/")
def createData(user: User):
    # Start the session
    print(user)

    with Session(engine) as session:
        # Add the data
        session.add(user)
        # Commit the changes
        session.commit()
        # Refresh the data.
        session.refresh(user)
        return user


# API to get all the EVs
@app.get("/getuserdatas")
def getEVs(admin: Admin):
    res = admin_auth(admin.username, admin.password)
    print(res)
    if res == False:
        return {"message": "Sorry, you are not allowed to perform this action"}
    # Start the session
    with Session(engine) as session:
        # Select statement to select all EVs
        statement = select(User)

        # Execute the statement
        statement = session.exec(statement).all()

        # Return the result
        return statement


# API to get all the EVs
@app.get("/getuserdata/{id}")
def getEVs(id: int, user: User):
    # print(id)
    # print(user)
    # Start the session
    with Session(engine) as session:
        # Select statement to select all EVs
        # statement=select(User).where(User.id == id)

        # # Execute the statement
        # statement=session.exec(statement).first()

        # print(statement)
        # if(statement.password==user.password):
        #     return {"message": "Sorry there is already a user with"}

        # Select statement to select all EVs
        statement = select(User).where(User.id == id)

        # Execute the statement
        statement = session.exec(statement).first()

        # Return the result
        return statement


# API to get all the EVs
@app.get("/getevdatas")
def getEVs():
    # Start the session
    with Session(engine) as session:
        # Select statement to select all EVs
        statement = select(EV)

        # Execute the statement
        statement = session.exec(statement).all()

        # Return the result
        return statement


# API to get all the EVs
@app.get("/getevdata/{id}")
def getEVs(id: int):
    print(id)
    # Start the session
    with Session(engine) as session:
        # Select statement to select all EVs
        statement = select(EV).where(EV.id == id)

        # Execute the statement
        statement = session.exec(statement).first()

        # Return the result
        return statement


# API to update the EV data
@app.put("/updateev/{EV_id}", response_model=EV)
def updateEV(EV_id: int, EV: EV):
    with Session(engine) as session:
        # Get the EV through the id
        db_data = session.get(EV, EV_id)

        # Raise exception if it does not exist
        if not db_data:
            raise HTTPException(status_code=404, detail="Data not found")
        EV_data = EV.dict(exclude_unset=True)

        for key, value in EV_data.items():
            setattr(db_data, key, value)

        # Add and commit the changes.
        session.add(db_data)
        session.commit()

        # Refresh the data.
        session.refresh(db_data)
        return db_data


# API for delete operation
@app.delete("/deleteev/{EV_id}")
def deleteEV(EV_id: int):
    # Start the session
    with Session(engine) as session:
        # Check if the entry corresponding to the id exists
        EV_data = session.get(EV, EV_id)
        if not EV_data:
            # Raise exception if the entry does not exist
            raise HTTPException(status_code=404, detail="Data not found")

        # Delete the entry
        session.delete(EV_data)

        # Commit the changes
        session.commit()

        # Return the message.
        return {"message": "successfully deleted"}


@app.post("/startsession/{ev_id}")
def startSession(ev_id: int, reserve: Reserve):
    with Session(engine) as session:
        user_signed=select(User.name)
        user_signed=session.exec(user_signed).all()
        print("************************************************************************************")
        if(reserve.name not in user_signed):
            raise HTTPException(status_code=404, detail="You are not signed in.")
        print(user_signed)
        is_available = select(EV.status).where(EV.id == ev_id)
        is_available = session.exec(is_available).first()
        if is_available == False:
            raise HTTPException(status_code=404, detail="It is not available")
        statement = select(EV.ev_price).where(EV.id == ev_id)
        statement = session.exec(statement).first()

        # Add the data
        reserve.ev_id = ev_id
        reserve.price = statement
        reserve.starttime = int(time.time())
        session.add(reserve)

        # Commit the changes
        session.commit()
        # Refresh the data.

        session.refresh(reserve)

        statement = select(EV).where(EV.id == ev_id)
        result = session.exec(statement).one()
        result.status = False
        session.add(result)
        session.commit()
        session.refresh(result)

    return {"timestamp": "Started at timestap: {}".format(int(time.time()))}


@app.post("/endsession/{ev_id}")
def startSession(ev_id: int, reserve: Reserve):
    with Session(engine) as session:
        user_signed=select(User.name)
        user_signed=session.exec(user_signed).all()
        print("************************************************************************************")
        if(reserve.name not in user_signed):
            raise HTTPException(status_code=404, detail="You are not signed in.")
        is_available = select(EV.status).where(EV.id == ev_id)
        is_available = session.exec(is_available).first()
        print(reserve.name)
        if is_available == True:
            raise HTTPException(status_code=404, detail="The station is not available")
        corresponding_name = select(Reserve.name).where(Reserve.ev_id == ev_id)
        corresponding_name = session.exec(corresponding_name).all()[-1]
        print(corresponding_name)
        if corresponding_name != reserve.name:
            raise HTTPException(status_code=403, detail="You are not allowed to do this")
        # statement=select(EV.ev_name, EV.address).where(EV.id==user.id)
        statement = select(Reserve.starttime, Reserve.price).where(
            Reserve.ev_id == ev_id
        )
        statement = session.exec(statement).all()[-1]
        print("sdfhiosdhfiokhjdsofds",statement)
        start_time = statement.starttime
        price = statement.price
        statement = select(EV).where(EV.id == ev_id)
        result = session.exec(statement).one()
        result.status = True
        session.add(result)
        session.commit()
        session.refresh(result)
    
    total_amount = int((int(time.time()) - int(start_time)) * price / 60)
    return {"amount": total_amount}


@app.post("/contactus")
def contact_form(contact: Contact):
    with Session(engine) as session:
        # Add the data
        session.add(contact)
        # Commit the changes
        session.commit()
        # Refresh the data.
        session.refresh(contact)
        return contact

@app.get("/getstats")
def getStats():
    details={}
    with Session(engine) as session:
        statement=select(EV.id)
        statement=session.exec(statement).all()
        print(len(statement))
        details['total_ev']=len(statement)
        session.commit()

        total_user=select(User.id)
        total_user=session.exec(total_user).all()
        print(len(total_user))
        details['total_users']=len(total_user)
        session.commit()

    return {"stats": details}
         


# Driver code of the program
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
