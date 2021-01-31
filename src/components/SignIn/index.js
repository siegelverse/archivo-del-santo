import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { 
    Container, 
    FormWrap, 
    Form, 
    Text, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormInput, 
    FormLabel 
} from './SigninElements'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }

    const loginUser = async (e) => {
        e.preventDefault() 

        fetch('http://localhost:3000/users/login' , {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .then(user => {
            console.log(user)
            history.push('/')
        })
    }
    

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form onSubmit={(e) => loginUser(e)}>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' value={email} required onChange={(e) => handleEmailChange(e)} />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' value={password} required onChange={(e) => handlePasswordChange(e)} />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Don't have an account? Sign up <a href='/signup'>here</a></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container> 
        </>
    )
}

export default SignIn
