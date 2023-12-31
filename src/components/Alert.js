import React from "react";

export default function Alert(props) {
    
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
      // issue (cumulative layout shift because of alert corrected)
      <div style= {{height: '50px'}}>
      {props.alert && <div className={`alert alert-${props.alert._type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert._type)}</strong> : {props.alert.msg}
      </div>}
      </div>
  );
}
