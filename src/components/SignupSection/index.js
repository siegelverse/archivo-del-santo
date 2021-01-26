import React from 'react'
import signupimg from '../../images/santo_car.jpg'
import { Button } from '../ButtonElement'
import {
    SignupContainer,
    SignupWrapper,
    SignupRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle, 
    Column2, 
    Img,
    BtnWrap,
    ImgWrap
} from './SignupElements'


const SignupSection = () => {
    return (
        <>
            <SignupContainer id='signup'>
                <SignupWrapper>
                    <SignupRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Sign Up</TopLine>
                                <Heading>Tag In!</Heading>
                                <Subtitle>
                                    Sign up now to leave comments and reviews for the films. 
                                    We'll also add you to our mailing list where we provide updates on future screenings, Santo history, and more.  
                                </Subtitle>
                                <BtnWrap>
                                    <Button to="/signup" primary dark big>Sign Up</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={signupimg}/>
                            </ImgWrap>
                        </Column2>
                    </SignupRow>
                </SignupWrapper>
            </SignupContainer>
        </>
    )
}

export default SignupSection