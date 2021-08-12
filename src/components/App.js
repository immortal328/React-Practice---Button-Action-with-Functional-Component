import React, {Component, useState} from "react";
import "./../styles/App.css";

function App(){
  
  const [text,setText] =useState(false);
  const txt="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
  
  return (
    <div id="main">
      // Do not alter the main div
      <button id="click" onClick={function(){setText(!text)}}>Toggle</button>
      {text? (<p id="para">{txt}</p>):null}
    </div>
  );
}


export default App;
