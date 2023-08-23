import React,{useState} from "react";

export default function TextForm(props) {

  const[text,setText] = useState('')
  
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked")
    setText(text.toUpperCase());
  }

  
  const handleLoClick = () =>{
    // console.log("Lowercase was clicked")
    setText(text.toLowerCase());
  } 

  const handleClearClick = () =>{
    // console.log("Clear was clicked")
    setText("");
  } 
  
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  const handleCopy = () => {
    // console.log("copy was clicked");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  
  const handleExtraSpaces = () => {
    // console.log("remove extra space was clicked");
    setText(text.split(/[ ]+/).join(" "))
  }

  return (
    <>
    <div style={{color: props.mode === 'dark' ?'white':'#042743'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ?'lightblue':'white'}} onChange={handleOnChange} value={text} id="myBox" rows="4" ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>To Uppercase</button> 
      <span style={{ margin: '0 6px' }}></span> {/* Adding a space */}
      
      <button className="btn btn-primary" onClick={handleLoClick}>To Lowercase</button>
      <span style={{ margin: '0 6px' }}></span> {/* Adding a space */}
      
      <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
      <span style={{ margin: '0 6px' }}></span> {/* Adding a space */}

      <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <span style={{ margin: '0 6px' }}></span> {/* Adding a space */}
       
      <button className="btn btn-primary" onClick={handleClearClick}>Clear</button>
    </div>

    <div style={{color: props.mode === 'dark' ?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something to preiew it here'}</p>
    </div>
    </>
  );
}
