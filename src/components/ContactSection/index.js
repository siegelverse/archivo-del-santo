import React from 'react'
import {
    ContactContainer,
    ContactWrapper,
    ContactRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle, 
    Column2,
    FormContent,
    FormWrap,
    Form,
    FormLabel,
    FormInput,
    FormButton,
} from './ContactElements'



const ContactSection = () => {
    return (
        <>
            <ContactContainer id='contact'>
                <ContactWrapper>
                    <ContactRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Contact</TopLine>
                                <Heading>Want To Know More?</Heading>
                                <Subtitle>
                                    This website was created by Marcus Siegel with artwork by Ishaq Fahim. 
                                    Marcus is currently seeking employment opportunities in Frontend Development. 
                                    Fill out the form if you'd like to stay in touch, or if you have any Santo info we might've missed!
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                        <FormWrap>
                            <FormContent>
                            <Form action='https://formspree.io/f/mvovyzyv' method="POST">
                                <FormLabel htmlFor='for'>Name</FormLabel>
                                <FormInput type="text" name="name" required />
                                <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput type="email" name="_replyto" required />
                                <FormLabel htmlFor='for'>Message</FormLabel>
                                <FormInput type='textarea' name="message" required />
                                <FormButton type="submit" value="Send">Submit</FormButton>
                            </Form>
                            </FormContent>
                        </FormWrap>
                        </Column2>
                    </ContactRow>
                </ContactWrapper>
            </ContactContainer>
        </>
    )
}

export default ContactSection