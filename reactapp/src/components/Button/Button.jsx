import {Btn} from "./buttonStyled.js"
import React from "react"
/*import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";  */

const Button = ({id, label, type}) => {

    return (   
      <Btn id = {id} type = {type}>{label}</Btn>
    )
 }
export default Button;