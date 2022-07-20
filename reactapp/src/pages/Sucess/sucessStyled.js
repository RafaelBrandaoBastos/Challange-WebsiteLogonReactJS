import styled from "styled-components";

export const TheBody = styled.div`
    background-color: #eceef2;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100vw;
    height: 100vh;
    margin: 0;
	padding: 0;
	border: 0;
`

export const MainSection = styled.section`
    background-color: #ffffff; 
    width: 100vw;
    height: 100%;
    border-radius: 20px;
    display: flex;   
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    @media (min-width: 768px) {   
        background-color: #ffffff;
        height: 763px;
        width: 617px;
        display: block;             
    }
`

export const Interface = styled.form`
    height: 100%;
    width: 80%;
    display: flex;   
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    @media (min-width: 768px) { 
        align-items: center;
        align-content: center;
        justify-content: center;  
        height: 100%;
        width: 100%;            
    }
`
export const TheContainer = styled.div`
    padding-top: 5vh;
    display: flex;
    flex-wrap: wrap;
    height: 80vw;
    width: 100%;
    justify-content: center;
    align-content: space-between;
    @media (min-width: 768px) { 
        height: 80%;            
    }
`
export const SubContainerButton = styled.div`
        width: 100%; 
        height: 6vh;
    @media (min-width: 768px) {   
        width: 250px;
        height: 150px; 
        display: block;             
    }
`


