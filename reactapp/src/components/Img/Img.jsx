import {ImgClouds, DivImg} from "./imgStyled.js"
import Clouds from "../../utils/Clouds.png";
import React from "react"

function Image() {
    return (
    <DivImg>
      <ImgClouds src ={Clouds}/>
    </DivImg>   
    )
  }
  export default Image;
