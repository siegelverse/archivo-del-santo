import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const MovieContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    background: #010606;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const VideoWrapper = styled.div`
    z-index: 3; 
    max-width: 1200px; 
    padding: 8px 24px; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MobileVid = styled.a`
    display: none;

    
    @media screen and (max-width: 768px) {
        display: block;
        margin-left: 16px;
        color: #FDD135;
        cursor: pointer;

        &:hover {
            transform: scale(1.02);
            transition: all 0.2s ease-in-out; 
            cursor: pointer; 
        }
    }
`;

export const Back = styled(Link)`
    width: 1100px;
    margin-left: 32px;
    color: #FDD135;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out; 
        cursor: pointer; 
    }

    @media screen and (max-width: 480px) {
        margin-left: 16px;
    }
`;

export const MovieH1 = styled.h1`
    font-size: 3.5rem; 
    color: #FDD135;
    margin-bottom: 60px; 

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;