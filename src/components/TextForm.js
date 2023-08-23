import React,{useState} from "react";

export default function TextForm(props) {

  const[text,setText] = useState('')
  
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked")
    setText(text.toUpperCase());
  }

  
  const handleLoClick = ()=>{
    // console.log("Lowercase was clicked")
    setText(text.toLowerCase());
  } 
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="4" ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>To Uppercase</button> 
      <span style={{ margin: '0 10px' }}></span> {/* Adding a space */}
      <button className="btn btn-primary" onClick={handleLoClick}>To Lowercase</button>
    </div>
    <div>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
    </div>
    </>
  );
}
