import React from "react"
import {TheBody, MainSection, Interface, TheContainer, SubContainerButton} from "./sucessStyled.js"
import Image from "../../components/Img/Img"
import GlobalTittle from "../../components/Tittle/Tittle"
import Button from "../../components/Button/Button"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Sucess() {

  const [page, setPage] = useState("/Sucess");
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(page)
    navigate(page)
  }, [page]);

  return (
    <TheBody>
      <MainSection>
          <Interface onsubmit="return false">
            <TheContainer>
                <Image />
                <GlobalTittle tittle = "Sucess"/>                           
                <SubContainerButton onClick = {() => setPage("/")}>
                    <Button id = "btn2" label = "Go Back"/> 
                </SubContainerButton>
            </TheContainer>
          </Interface>    
      </MainSection>
    </TheBody>   
    )
  }
  
  
export default Sucess;