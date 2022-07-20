import styled from "styled-components";

export const DivImg = styled.div`
    display: flex;
    justify-content: center; 
    width: 100vw;
    height: 20vw;
    @media (min-width: 768px) {   
        display: flex;
        justify-content: center; 
        width: 100vw;
        height: 15vh;           
    }
    @media (max-width: 500px) {   
        width: 100vw;
        height: 100px;            
    }
`
export const ImgClouds = styled.img`
    width: auto;
    height: auto;
`