import React from "react";

const Button = () => {


const stop=()=>{
    let img=document.getElementsByClassName("App-logo")[0];
    console.log(img);
    img.className="";
}







  return (<div> <button id="stopanimation" type="button" onClick={stop}>Stop animation</button> </div>)
};

export default Button;