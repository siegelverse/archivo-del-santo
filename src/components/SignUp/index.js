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
} from '../SignIn/SigninElements'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
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

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
        console.log(username)
    }

    const loginUser = async (e) => {
        e.preventDefault() 

        fetch('http://localhost:3000/users' , {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email,
                name: username,
                password
            })
        })
        .then(res => res.json())
        .then(user => {
            localStorage.setItem('token', user.token)
            history.push('/')
        })
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form onSubmit={(e) => loginUser(e)}>
                            <FormH1>Sign up to create an account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' value={email} required onChange={(e) => handleEmailChange(e)} />
                            <FormLabel htmlFor='for'>Username</FormLabel>
                            <FormInput type='username' value={username} required onChange={(e) => handleUsernameChange(e)} />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' value={password} required onChange={(e) => handlePasswordChange(e)} />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Already have an account? Sign in <a href='/signin'>here</a></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container> 
        </>
    )
}

export default SignUp