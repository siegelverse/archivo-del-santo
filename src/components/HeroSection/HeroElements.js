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
    // position: relative; 
    z-index: 1;
    

    // :before {
    //     content: '';
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //     background: linear-gradient(
    //         180deg,
    //         rgba(0, 0, 0, 0.2) 0%,
    //         rgba(0, 0, 0, 0.6) 100%,
    //     ),
    //     linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    //     z-index: 2;
    // }
`; 

export const HeroBg = styled.div`
    // position: absolute;
    width: 100%;
    height: 800px;
    top: 0;
    right: 0;  
    bottom: 0; 
    left: 0;
    overflow: hidden; 
`;

export const ImgBg = styled.div`
    background-image: url(${backgroundimg});
    background-size: cover; 
    background-position: center;
    width: 100%;
    height: 100%;
`;

export const HeroContent = styled.div`
    margin-top: -150px;
    z-index: 3; 
    max-width: 1200px; 
    position: absolute; 
    padding: 8px 24px; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    
`; 

export const LogoImg = styled.img`
    width: 500px;

    @media screen and (max-width: 768px) {
        width: 400px;
    }

    @media screen and (max-width: 480px) {
        width: 300px;
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