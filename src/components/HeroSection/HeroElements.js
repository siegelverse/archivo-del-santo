import styled from 'styled-components'
import backgroundimg from '../../images/home_bg.jpg'

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
    top: 0;
    right: 0;  
    bottom: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
    overflow: hidden; 
`;

export const ImgBg = styled.div`
    background-image: url(../../images/home_bg.jpg);
    width: 2000px;
    height: 2000px;
    -o-object-fit: cover; 
    object-fit: cover; 
    background: #010606;
`;