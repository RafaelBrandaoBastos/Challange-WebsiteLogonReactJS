import {AllInput, MainText, TextInvalid} from "./allinputStyled.js"
import React, {useState, useEffect} from "react"


  const GlobalInput = (props)=>{
    /*
    let [value, setValue] = useState("none");
    
    useEffect(() => {
      localStorage.setItem('myValueInLocalStorage', value);
    }, [value]);*/
    
    
    return ( 
    <>
    <MainText></MainText>   
    <AllInput initialValue = {props.value} id={props.id} type={props.type} name={props.name} placeholder={props.placeholder} /*this.state.value} onChange = {setValue(value)}*/ {...props.register(props.id, {required: true})}/> 
    
    </> 
  )
  
};
export default GlobalInput;
