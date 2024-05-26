import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () => {
        console.log("Lowercase was clicked")
        let newText = text.toLowerCase()
        setText(newText)
        setCurText(text)
    }

    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
        setCurText(text)
    }

    const handleOriginalClick = () => {
        console.log("Original text")    
        setText(currentText)
    }

    const [text, setText] = useState("")
    const [currentText, setCurText] = useState(text)
  return (
    <>
    <div className='container' style={{color : props.mode === "dark"?"white":"#031b48"}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor : props.mode === "dark"?"#031b48":"white", color : props.mode === "dark"?"white":"black"}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-2' onClick={handleOriginalClick}>Get Original Text</button>
    </div>
    <div className='container my-3' style={{color : props.mode === "dark"?"white":"black"}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0?text:"Enter Your Text To Preview"}</p>

    </div>
    </>
    
  )
}
