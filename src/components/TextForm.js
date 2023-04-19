import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpperCaseClick = () => {
    // console.log("Upper Case Clicked" + text);
    let newText = text.toUpperCase();
    // setText("you have clicked on handleUpperCaseClick")
    setText(newText);
    props.showAlert("Converted to upppecase!","success")
  }
  const handlelowerCaseClick = () => {

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success")
  }
  const handleClearCaseClick = () => {

    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared", "success");
  }
  const reversed = () => {
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords
    setText(newText);
    props.showAlert("Text is reversed", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text voice enabled", "success");
  }
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  // text = ("new text"); //wrong way to change the state 
  // setText("new text"); //correct way to change the state

  return (
    <>
      <div className="container" style={{color:props.mode ==='light'?'black':'white'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='light'?'white':'gray',color:props.mode ==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <div className="container flex justify-center">
          <button className="btn btn-outline-success" onClick={handleUpperCaseClick}>convert To Uppercase</button>
          <button className="btn btn-outline-info mx-1 my-2" onClick={handlelowerCaseClick}>Convert To Lowercase</button>
          <button className="btn btn-outline-secondary  my-2" onClick={handleClearCaseClick}>Clear Text</button>
          <button className="btn btn-outline-primary mx-1 my-2" onClick={reversed}>Reverse Text</button>
          <button className="btn btn-outline-danger " onClick={speak}>Speak Text</button>
        </div>
      </div>
      <div className="container my-3 "style={{color:props.mode ==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/ ).filter((element)=>{return element. length!==0}).length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element. length!==0}).length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Something in the textbox above to preview here'}</p>
      </div>
    </>
  )
}
