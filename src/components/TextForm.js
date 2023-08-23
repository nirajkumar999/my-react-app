import React,{useState} from "react";

export default function TextForm(props) {

  const[text,setText] = useState('')
  
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked")
    setText(text.toUpperCase());
  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>To Uppercase</button>
    </div>
  );
}
