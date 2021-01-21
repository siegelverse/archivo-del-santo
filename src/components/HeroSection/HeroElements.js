import styled from 'styled-components'
import backgroundimg from '../../images/home_bg.jpg'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding: 0 30px
    height: 800px;
    position: relative; 
    z-index: 1;
`; 

export const HeroBg = styled.div`
    position: absolute;
    background-image: url(${backgroundimg});
    background-size: cover; 
    background-position: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;  
    bottom: 0; 
    left: 0;
    overflow: hidden; 
`;

export const HeroContent = styled.div`
    margin-top: 600px;
    z-index: 3; 
    max-width: 1200px; 
    position: absolute; 
    padding: 8px 24px; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 

    @media screen and (max-width: 768px) {
        margin-top: 500px;
    }

    @media screen and (max-width: 480px) {
        margin-top: 400px
    }
`; 

export const LogoImg = styled.img`
    width: 500px; 

    @media screen and (max-width: 768px) {
        width: 400px;
    }

    @media screen and (max-width: 480px) {
        width: 250px
    }
`; 

export const HeroP = styled.p`
    margin-top: 24px; 
    color: #000; 
    font-size: 24px; 
    text-align: center; 
    max-width: 600px; 

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
    }
`; 

export const HeroBtnWrapper = styled.div`
    margin-top: 32px; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px; 
    font-size: 20px; 
`; 

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px; 
    font-size: 20px; 
`;