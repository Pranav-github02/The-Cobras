
import React from 'react';
import Navbar from './components/Navbar';
// import {Route} from 'react-router-dom'
import {Routes,Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';
import Update from './components/Update';
// konsa route par jna haa
function App() {
  return (
    <>
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update/:email" element={<Update/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Errorpage />} />
        
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
     {/* <Route path="/"><Home/></Route>
     <Route path="/contact"><Contact/></Route>
     <Route path="/about"><About/></Route>
     <Route path="/login"><Login/></Route>
     <Route path="/signup"><Signup/></Route> */}
 
   
    </>
   
  );
}

export default App;
