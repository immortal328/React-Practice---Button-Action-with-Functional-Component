import React, {Component, useState} from "react";
import "./../styles/App.css";

function App(){
  
  const [text,setText] =useState("");
  const txt="<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>";
  
  return (
    <div id="main">
      // Do not alter the main div
      <button id="click"onClick={function(){setText(txt)}}>Toggle</button>
      {text}
    </div>
  );
}


export default App;
