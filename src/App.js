import React from 'react'
import PropTypes from 'prop-types'

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
<Navbar title = "TextUtils" About = "About Us"/>
    <div className='container my-3'>
    <TextForm heading = "Enter the text here"/>
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