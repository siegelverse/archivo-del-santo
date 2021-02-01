import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #000;
    background: #010606;
    height: 100vh;
    width: 100%;
    display: grid; 
    justify-content: center;
    grid-auto-columns: 1fr 1fr 1fr; 
    align-items: center; 
    grid-template-areas: 'col1 col2 col3';

    @media screen and (max-width: 768px) {
        height: 900px;
        grid-template-areas: 'col1' 'col2' 'col3';
        
    }
`;

export const Column1 = styled.div`
    background: #010606;
    margin-bottom: 15px; 
    padding: 0 15px; 
    grid-area: col1;

    @media screen and (max-width: 786px) {
        margin-bottom: 0;
    }
`;

export const Column2 = styled.div`
    background: #010606;
    margin-bottom: 15px; 
    padding: 0 15px;;  
    grid-area: col2;

    @media screen and (max-width: 786px) {
        margin-bottom: 0;
    }
`;

export const Column3 = styled.div`
    background: #010606;
    margin-bottom: 15px; 
    padding: 0 15px; 
    grid-area: col3;

    @media screen and (max-width: 786px) {
        margin-bottom: 0;
    }
`;

export const InfoHeading = styled.p`
    color: #67AB8E; 
    font-size: 16px; 
    line-height: 16px; 
    font-weight: 700; 
    letter-spacing: 1.4px; 
    text-transform: uppercase; 
    margin-bottom: 16px;
`; 

export const InfoText = styled.p`
    max-width: 440px; 
    margin-bottom: 35px; 
    font-size: 18px; 
    line-height: 24px; 
    color: #FDD135; 
`;