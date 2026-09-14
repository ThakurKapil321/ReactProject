import "./App.css";
import Login from "./Pages/Login.jsx"
import Home from "./Pages/Home.jsx"
import SignUp from "./Pages/SignUp.jsx";
import { Routes, Route } from "react-router-dom"
import PageNFound from "./Pages/PageNotFound.jsx";
import About_us from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx"
import Profile from "./Pages/Profile.jsx";
import ViewDetails from "./Pages/ViewDetails.jsx"

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<PageNFound/>}/>
        <Route path="/" element={<Home />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/about" element={<About_us/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/ViewDetails/:id" element={<ViewDetails/>}/>

      </Routes>

    

    </div>
  );
}

export default App;
