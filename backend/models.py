from typing import Optional
from sqlmodel import Field, SQLModel

# Model class for SQL model
class EV(SQLModel,table=True):
    id: Optional[int]=Field(default=None, primary_key=True)
    username: str | None =None
    password: str | None = None
    ev_name: str | None = None
    ev_price: int | None = None
    address: str | None = None
    status: bool | None = None
    image: str | None = None
    

class User(SQLModel,table=True):
    id: Optional[int]=Field(default=None, primary_key=True)
    name: str | None = None
    # password: str | None = None
    age: str | None = None
    gender: str | None = None
    contact: int | None = None
    email_address: str | None = None


class Reserve(SQLModel,table=True):
    id: Optional[int]=Field(default=None, primary_key=True)
    ev_id: int | None = None
    name: str | None = None
    starttime: int | None = None
    price: int | None = None

class Contact(SQLModel,table=True):
    id: Optional[int]=Field(default=None, primary_key=True)
    name: str | None = None
    email: str | None = None
    message: str | None = None

class Admin(SQLModel,table=True):
    id: Optional[int]=Field(default=None, primary_key=True)
    username: str | None = None
    password: str | None = None