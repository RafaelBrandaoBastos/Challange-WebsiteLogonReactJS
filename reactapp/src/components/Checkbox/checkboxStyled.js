import styled from "styled-components";


export const CheckboxSection = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 10px; 
    @media (min-width: 768px) {   
      width: 600px;
      height: 70px;
      padding-bottom: 0px;              
    }
`
export const CheckboxMainText = styled.p`
  width: 100%;
  display: flex;
  color: black;
  font-family: 'Nunito'; 
  font-style: normal;
  font-size: 3vw;
  padding-left: 30px;
  @media (min-width: 768px) {   
    font-size: 15px;            
  }
  @media (max-width: 500px) {  
    font-size: 15px;           
  }
`
export const CheckboxAndText = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 60%;
  align-items: center; 

`

export const Container = styled.div`
  display: flex;
  position: relative;
  padding-left: 10px;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 5vh;
  width: 50%
`
export const TheCheckbox = styled.input`
  margin-right: 30px;
  position: absolute;
  opacity: 1;
`

export const TextInvalid = styled.label`
  padding-left: 10px;
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




  /* 
  export const Checkmark = styled.span`
  margin-right: 30px;
  position: absolute;
  height: 20px;
  width: 20px;
  opacity: 1;
  background-color: #eee;       
`
  
  
  
  Create a custom checkbox 
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }  
  
  /* On mouse-over, add a grey background color 
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  /* When the checkbox is checked, add a blue background 
  .container input:checked ~ .checkmark {
    background-color: #0dbdbd;
  }
  
  /* Create the checkmark/indicator (hidden when not checked) 
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the checkmark when checked 
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the checkmark/indicator 
  .container .checkmark:after {
    left: 6px;
    top:3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

*/