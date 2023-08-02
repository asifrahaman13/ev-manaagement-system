import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Listing from "./components/Listing/Listing";
import StationDetails from "./components/StationDetails/StationDetails";
import Reserve from "./components/Reserve/Reserve";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";
import Homepage from "./components/Homepage/Homepage";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/listing" element={<Listing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path={"/:slug"} element={<StationDetails/>}/>
          <Route path={"signup"} element={<Signup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
