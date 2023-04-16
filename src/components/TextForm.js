import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperCaseClick = ()=>{
        // console.log("Upper Case Clicked" + text);
        let newText = text.toUpperCase();
        // setText("you have clicked on handleUpperCaseClick")
        setText(newText);
    }
    const handlelowerCaseClick = ()=>{
      
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearCaseClick = ()=>{
      
        let newText = "";
        setText(newText);
    }
    const reversed = () => {
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords
    setText(newText);
  };
  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const[text, setText] = useState('');
    // text = ("new text"); //wrong way to change the state 
    // setText("new text"); //correct way to change the state

  return (
    <>
    <div className="container">
      <div className="mb-3">
      <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <div className="container flex justify-center">
    <button className="btn btn-primary" onClick={handleUpperCaseClick}>convert to uppercase</button>
    <button className="btn btn-primary mx-1 my-2" onClick={handlelowerCaseClick}>convert to lowercase</button>
    <button className="btn btn-primary  my-2" onClick={handleClearCaseClick}>Clear Text</button>
    <button className="btn btn-primary mx-1 my-2" onClick={reversed}>Reverse Text</button>
    <button className="btn btn-primary " onClick={speak}>Speak Text</button>
    </div>
    </div>
    <div className="container my-3 ">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length}characters</p>
      <p>{0.008*text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
