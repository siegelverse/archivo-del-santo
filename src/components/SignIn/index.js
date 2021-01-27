import React from 'react'
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
    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Username</FormLabel>
                            <FormInput type='username' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
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
