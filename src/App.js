
import PropTypes from 'prop-types'
import React, { useState } from 'react'


import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const[Mode, setMode] = useState("light")
  const toggleMode = () => {
     if (Mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#031b48"
     }
     else{
      setMode("light")
      document.body.style.backgroundColor = "white"
     }
  }
  return (
    <>
    
<Navbar title = "TextUtils" About = "About Us" mode = {Mode} toggleMode = {toggleMode}/>
    <div className='container my-3'>
    <TextForm heading = "Enter the text here" mode = {Mode}/>
    {/* <About/> */}
    </div>

    </>
  );
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  About : PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//   title : "Set title here",
//   About : "Set About details"
// }
export default App;