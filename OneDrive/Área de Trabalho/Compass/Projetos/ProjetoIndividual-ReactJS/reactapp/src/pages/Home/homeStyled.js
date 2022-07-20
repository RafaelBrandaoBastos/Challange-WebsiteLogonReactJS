import styled from "styled-components";

export const TheBody = styled.div`
    background-color: #eceef2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
`

export const MainSection = styled.section`
    background-color: #ffffff; 
    border-radius: 20px;
    width: 100vw;
    height: 100%;
    display: flex;   
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
    @media (min-width: 768px) {   
        background-color: #ffffff;
        height: 763px;
        width: 617px;                  
    }
`

export const Interface = styled.form`
    display: flex; 
    padding-top: 10px;
    padding-bottom: 10px;   
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    @media (min-width: 768px) {   
        height: 99%;
        width: 99%;            
    }
`

export const ContainerTittle = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 18vh;
    width:100%;  
    @media (min-width: 768px) {   
    }
`
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    height: 80%;
    justify-content: center;
    align-items: center;
    align-content: space-around;
    @media (max-width: 480px) {   
        height: 80%;         
    }
    @media (min-width: 768px) {       
        height: 60%;
        width: 617px;  
        padding-bottom: 50px;          
    }
`

export const SubContainer1 = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    width: 90%;
    height: 16vw;
    @media (min-width: 768px) {   
        width: 575px;
        height: 15vh;
        flex-wrap: wrap; 
        padding-bottom: 0px;          
    }
`
export const SubContainer2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    height: 32%;
    justify-content: center;
    align-items: space-between;
    align-content: space-between;
    @media (min-width: 768px) {
        padding-right: 30px;   
        width: 320px;
        height: 300px; 
        margin-bottom: 0vh;
        margin-top: 0px;   
        align-items: flex-start;
        align-content: flex-start;        
    }
`
export const ContainerEmail = styled.div`
    display: block;
    width: 99.5%;
    padding-bottom: 0px;
    @media (min-width: 768px) {
        padding-bottom: 40px;
                   
    }
`
export const ContainerPassword = styled.div`
    display: block;
    width: 99.5%;
    @media (min-width: 768px) {      
    }
`
export const SubContainer3 = styled.div` 
    display: flex;
    flex-wrap: nowrap;
    width: 90%;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    @media (min-width: 768px) {   
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 225px;
        height: 300px;
        margin-bottom: 0vh;      
    }
`
export const SubContainer4 = styled.div` 
    width: 90%;
    height: 14vh;
    display: block;
    justify-content: flex-start;
    align-items:center;
    align-content: center;
    flex-wrap: wrap;
    @media (min-width: 768px) {
        display: flex;
        flex-wrap: nowrap;   
        width: 575px;
        height: 8vh;  
    }
`

export const ContainerPhone = styled.div` 
    display: block;
    padding-right: 7vw;
    width: 46%;
    padding-bottom: 0px;
    @media (min-width: 768px) {
        padding-right: 0px;
        width: 99%;
        padding-bottom: 40px;       
    }
`
export const ContainerDate = styled.div`
    display: block;
    width: 46%;
    @media (min-width: 768px) { 
        width: 99%;     
    }
`


export const SubContainerButton = styled.div`
    width: 100%;
    height: 7vh;
    @media (min-width: 768px) {  
        display: flex;
        width: 150px;
        height: 40px;         
    }
    
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