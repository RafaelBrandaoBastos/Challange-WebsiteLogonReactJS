import {Container, TheCheckbox, CheckboxSection, CheckboxAndText, CheckboxMainText, TextInvalid} from "./checkboxStyled.js"
import React, {useState, useEffect} from "react"
import styled from "styled-components";
import { toNestError } from "@hookform/resolvers";
import {useRef} from 'react';

const Checkbox = (props2)=> {

    let [error, setError] = useState("must accept the terms");

    const handleChange = () => {
        if (event.target.checked) {
            setError("")
        } else {
            setError("must accept the terms")
        }
      };

    return (
        <CheckboxSection>
            <CheckboxAndText>
                <Container>           
                    <TheCheckbox id = {props2.id} type = {props2.type} required = {true} onChange={handleChange} />
                    <CheckboxMainText>{props2.label}</CheckboxMainText>                   
                </Container>     
            </CheckboxAndText> 
            <TextInvalid>{error}</TextInvalid>                          
        </CheckboxSection> 
    
    )
}
export default Checkbox;


