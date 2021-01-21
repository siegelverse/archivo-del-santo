import React from 'react'
import aboutimg from '../../images/about_splash.jpg'
import {
    AboutContainer,
    AboutWrapper,
    AboutRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle, 
    Column2, 
    Img,
    ImgWrap
} from './AboutElements'


const AboutSection = () => {
    return (
        <>
            <AboutContainer>
                <AboutWrapper>
                    <AboutRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>About</TopLine>
                                <Heading>Archivo Del Santo</Heading>
                                <Subtitle>
                                    Welcome to the web's most complete archive of the Santo film collection. Here you can read about the productions, and even watch some of the films! 
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={aboutimg}/>
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection
