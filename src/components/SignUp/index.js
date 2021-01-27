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
} from '../SignIn/SigninElements'

const SignUp = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign up to create an account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Username</FormLabel>
                            <FormInput type='username' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
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