import React, { Component, useEffect,useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: 0,
    top: 0,
  });

  const handleListener=(event)=>{
    console.log("in handlistener"+event.keyCode);
    
    switch(event.keyCode){
        case 39:
        if(event.keyCode==39){
            setBallPosition({
                left:ballPosition.left + 5,
                top: ballPosition.top,
            });
        }
            break;
        case 40:
          if(event.keyCode==40){
            setBallPosition({
                left:ballPosition.left,
                top: ballPosition.top+5,
            });
          }
            break;
        case 38:
          if(event.keyCode==38){
            setBallPosition({
                left:ballPosition.left,
                top: ballPosition.top-5,
            });
          }
            break;
        case 37:
          if(event.keyCode==37){
            console.log("in 37");
            setBallPosition({
                left:ballPosition.left - 5,
                top: ballPosition.top,

            });
          }
            break;
        }
        console.log(ballPosition);
    }
  

  const reset = () => {
    console.log("in reset");
    setBallPosition(
      {
        left:0,
        top:0,
      }
    )
    setRenderBall(false);
  };

  const buttonClickHandler=()=> {
    console.log("buttonClick handler");
    setRenderBall(true);

  }


  const renderChoice = () => {
    console.log("renderchoice");
    if(renderBall){
      console.log("in if");
      return <div className="ball" style={{
        
        left:ballPosition.left+"px",
        top:ballPosition.top+"px",
        position:"absolute",
      }}></div>
          
    }else{
      console.log("in else");
      return <button className="start" onClick={buttonClickHandler} >Start</button>
    }
  };

  useEffect(()=>{
    document.addEventListener("keydown",handleListener);
        //logic
    return ()=> document.removeEventListener("keydown",handleListener);
  },[ballPosition])
  

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
  
    </div>
  );
};

export default App;
