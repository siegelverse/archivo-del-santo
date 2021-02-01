import styled from 'styled-components'

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

export const MovieH1 = styled.h1`
    font-size: 3.5rem; 
    color: #FDD135;
    margin-bottom: 60px; 

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;