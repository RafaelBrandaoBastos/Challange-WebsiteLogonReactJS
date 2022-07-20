import React from "react"
import {TheBody, MainSection, Interface, ContainerTittle, Container, ContainerPhone, TextInvalid, SubContainer1, SubContainer2, SubContainer3, SubContainer4, ContainerEmail, ContainerPassword, ContainerDate, SubContainerButton} from "./homeStyled.js"
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import Image from "../../components/Img/Img"
import GlobalTittle from "../../components/Tittle/Tittle"
import GlobalInput from "../../components/Input/AllInput"
import Checkbox from "../../components/Checkbox/Checkbox"
import Button from "../../components/Button/Button"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    inputName: yup.string().matches(/^[a-zA-Za-éúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ]{4,100}(?: ){1}[a-zA-Za-éúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ]{0}/).required(),
    inputEmail: yup.string().email().matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).required(),
    inputPassword: yup.string().matches(/^[0-9]{6,9}$/).required(),
    inputPhone: yup.string().matches(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/).required(),
    inputBirthday: yup.string().matches(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/).required(),
  }).required();


function Home() {   
    const { register, handleSubmit, formState: { errors } } =  useForm({resolver: yupResolver(schema)});    
    let navigate = useNavigate(); 
      function validation(userData) {
        navigate('/Sucess');
      }


return (
    <TheBody>
        <MainSection>
            
            <Interface onSubmit={handleSubmit(validation)}>
                
                <ContainerTittle>
                    <Image />
                    <GlobalTittle tittle = "Intern SignUp"/>
                </ContainerTittle>
                

                <Container>                             
                    
                    <SubContainer1>       
                        <GlobalInput label1="Full Name" id="inputName" idinvalid="inputname" type="text" placeholder="more than four digits and least one space" register={register} errors={errors}/>
                        {errors.inputName && <TextInvalid>invalid fullname</TextInvalid>}
                    </SubContainer1>
                    
                    <SubContainer2>
                        <ContainerEmail>                            
                            <GlobalInput label="Email" id="inputEmail" idinvalid="inputemail" type="text" placeholder="something@something.com (without upercase)" register={register} errors={errors}/>                            
                            {errors.inputEmail && <TextInvalid>invalid email</TextInvalid>}
                        </ContainerEmail>
                        
                        <ContainerPassword>
                            <GlobalInput label="Password" id="inputPassword" type="password" placeholder="only numbers between 6 and 9" register={register} errors={errors}/>                 
                            {errors.inputPassword && <TextInvalid>invalid password</TextInvalid>}
                        </ContainerPassword>                           
                    </SubContainer2>
                    
                    <SubContainer3>
                        <ContainerPhone>                            
                            <GlobalInput label="Phone" id="inputPhone" idinvalid="inputphone" type="number" placeholder="(__) _____-____" register={register} errors={errors}/>                             
                            {errors.inputPhone && <TextInvalid>invalid phone</TextInvalid>}
                        </ContainerPhone>
                        <ContainerDate>       
                            <GlobalInput label="Birthday" id="inputBirthday" idinvalid="inputbirthday" type="date" register={register} errors={errors}/>          
                            {errors.inputBirthday && <TextInvalid>invalid birthday</TextInvalid>}
                        </ContainerDate>                             
                    </SubContainer3>

                    <SubContainer4>        
                        <Checkbox type = "checkbox" id = "inputCheckox" label = "i accept the terms of privacy" error = "must accept the terms"/>
                                        
                        <SubContainerButton>
                            <Button id = "btn1" label = "Register" type="submit"/> 
                        </SubContainerButton>  
                                        
                    </SubContainer4>
                    
                </Container>
            </Interface> 
               
        </MainSection>
    </TheBody>   
  )
}

export default Home;
