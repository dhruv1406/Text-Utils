import React, { useState } from "react";

export default function Textbox(props) {
  // To Upper case
  const handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted To Upper Case', 'success');
};

// To Lower Case
const handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted To Lower Case', 'success');
  };

  // to pascal Case
  // const handlePascal =

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3 my-5" style={{color : `${props.mode==='dark'?'white':'black'}`}}>
        <h3>{props.heading}</h3>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          onChange={handleChange}
          rows="5"
          style={{color : `${props.mode==='dark'?'white':'black'}`, backgroundColor : `${props.mode==='dark'?'grey':'white'}` }}
        ></textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={handleUpper}>
          UPPER CASE
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleLower}>
          lower case
        </button>
      </div>
      <div className="container" style={{color : `${props.mode==='dark'?'white':'black'}`}}>
        <h2>Your Text Summary:</h2>
        <p>{text.split(' ').length} words and {text.length} characters in total.</p>
        <h2>Preview:</h2>
        <p style={{color: 'red', fontSize : '1.3em'}}>{text.length>0?text:"Enter your text in the above box to preview it here."}</p>
      </div>
    </>
  );
}
