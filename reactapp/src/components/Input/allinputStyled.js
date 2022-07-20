import styled from "styled-components";

export const AllInput = styled.input`
    width: 100%;
    min-height: 40px;
    height: 8vw;
    padding: 0px;
    @media (min-width: 768px) {   
        height: 4vh;             
    }
`

export const Container = styled.div`
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
`
export const TextInvalid = styled.label`
    color: red;
    font-family: 'Nunito';
    font-style: normal;
    font-size: 2vw;
    display: flex;
    opacity: 1;
    @media (min-width: 768px) {   
        font-size: 15px;           
    }
    @media (max-width: 500px) {  
        font-size: 15px;           
    }
`
export const MainText = styled.p`
    color: black;
    font-family: 'Nunito'; 
    font-style: normal;
    font-size: 3vw;
    margin-bottom: 0px;
    @media (min-width: 768px) {   
        font-size: 15px;            
    }
    @media (max-width: 500px) {  
        font-size: 15px;           
    }
`



