import React,{useState} from "react";

export default function TextForm(props) {

  const[text,setText] = useState('')
  
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase !!!","success");
  }

  
  const handleLoClick = () =>{
    // console.log("Lowercase was clicked");
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase !!!","success");
  } 

  const handleClearClick = () =>{
    // console.log("Clear was clicked");
    setText("");
    props.showAlert("Cleared !!!","success");
  } 
  
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  const handleCopy = () => {
    // console.log("copy was clicked");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard !!!","success");
  }

  
  const handleExtraSpaces = () => {
    // console.log("remove extra space was clicked");
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("Removed extra spaces !!!","success");
  }

  return (
    <>
    <div style={{color: props.mode === 'dark' ?'white':'#042743'}}>
      <h1 className= 'mb-4'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ?'lightblue':'white'}} onChange={handleOnChange} value={text} id="myBox" rows="4" ></textarea>
      </div>

      {/* issue resolved (if there is no text inside the box, then all buttons are set to be disabled) */}
      <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>To Uppercase</button> 
      
      <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>To Lowercase</button>
      
      <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>

      <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       
      <button disabled= {text.length===0} className="btn btn-primary" onClick={handleClearClick}>Clear</button>
    </div>

    <div style={{color: props.mode === 'dark' ?'white':'#042743'}}>
      <h1>Your Text Summary</h1>

      {/* fixed issue. (empty text form reads word count = 1) */}
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
      
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Nothing to Preiew!'}</p>
    </div>
    </>
  );
}
