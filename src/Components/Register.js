import React from 'react'

// STYLED COMPONENT IMPORT 
import Styled from 'styled-components';

// you can use styled component for styling any part into your jsx file

export default function Register(props) {

    // ########################################### STYLED COMPONENTS USAGE ######################################################

    const StyledButton = Styled.button`
        display:${(props) => props.flag ? "inline-block" : "block"};
        padding: 10px 5px;

        // WE CAN USE PROPS INSIDE THE STYLED COMPONENTS
        
        background-color: ${(props) => props.bgcolor};
        
        
        border:none;
        color: white;
        width:${(props) => props.flag ? "49%" : "100%"};
        margin-top: 10px;
        border-radius: 5px;
        margin-left: ${props => props.mle}`
// make 1 variable and store all the css properties into it in the form of string 

    const StyledRegisterContainer = Styled.div`
        width: 500px;
        &:hover {
            box-shadow: 0px 0px 5px grey;
        }
        @media (min-width: 0px) and (max-width: 600px){
            width: 300px
        }`

// ############################################################################################################################## 

  return (
    <StyledRegisterContainer className='container card p-3 mt-2 register-container'>
        <h1 className='text-center'>Registration Form</h1>
        
        {/* ############################### onSubmit EVENT HANDLER ########################################################### */}

        <form onSubmit={props.submit}> 

        {/* onSubmit is an event handler which gets into action when submit button of the form is placed, this CREATES AN EVENT which will get captured by registrationHandler function that have made for this purpose */}

        {/* ################################################################################################################## */}

            <div className='form-group'>
                <label htmlFor='name'>Name: </label>
                <input type="text" name='name'required  className='form-control'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email: </label>
                <input type="text" name='email'required  className='form-control'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password: </label>
                <input type="password" name='password' required className='form-control'></input>
            </div>

            {/* #########################################  SUBMIT BUTTON ##################################################### */}

            <button type="submit" className='btn btn-primary'>Register</button><br />
            {/* by clicking this button the onSubmit event gets into action */}

            {/*### YOU CAN USE THE VARIABLE THAT YOU'VE MADE AND GIVE IT A TYPE OF BUTTON SO THAT IT WILL WORK AS A BUTTON ####*/}

            <StyledButton type='button' bgcolor="orange" flag="1">Login</StyledButton>

{/* ########################################## USING PROPS INSIDE THE STYLED COMPONENTS ###################################### */}

{/* why should we use it? => when you want to use button which is styled by styledButton variable, but you want the color of that button should be something else at that time you can use props */}

            <StyledButton type='button' bgcolor="green" flag="1" mle = "7px">Login with Google</StyledButton>

            {/* so here, we have used bgcolor as a prop, now we will pass it into styledButton variable */}

            <StyledButton type='button' bgcolor="blue" >Login with Facebook</StyledButton>
            

           

        </form>
    </StyledRegisterContainer>
  )
}
