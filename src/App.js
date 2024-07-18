import React from "react";
import "./App.css";
function App(){
  return(
    <>
    <div className="header">
    <h1 className="title">TIC TAC TOE</h1>
    <p className="sub-title">By Pradeep Modak</p>
    </div>
    <div className="matrix">
     <Board/>
    </div>
    </>
  );
}

function Board(){
return(
  <div className="Board">
    <div>
    <Block></Block>
    <Block></Block>
    <Block></Block>
    </div>
    <div>
    <Block></Block>
    <Block></Block>
    <Block></Block>
    </div>
    <div>
    <Block></Block>
    <Block></Block>
    <Block></Block>
    </div>

  </div>
)
}

function Block(){
  return(
    <div className="Block signX">  
    </div>
  )
}
export default App; 