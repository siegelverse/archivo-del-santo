import styled from 'styled-components'

export const ContactContainer = styled.div`
    color: #fff;
    background: #000; 
    
    @media screen and (max-width: 768px) {
        padding: 100px 0; 
    }
`;

export const ContactWrapper = styled.div`
    display: grid; 
    z-index: 1; 
    height: 100vh; 
    width: 100%; 
    max-width: 1100px; 
    margin-right: auto; 
    margin-left: auto; 
    padding: 0 24px; 
    justify-content: center; 
`;

export const ContactRow = styled.div`
    display: grid; 
    grid-auto-columns: minmax(auto, 1fr); 
    align-items: center; 
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px; 
    padding: 0 15px; 
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px; 
    padding: 0 15px; 
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px; 
    padding-top: 0;
    padding-bottom: 60px; 
    @media screen and (max-width: 480px) {
        padding-bottom: 0px; 
    }
`;

export const TopLine = styled.p`
    color: #67AB8E;
    font-size: 16px; 
    line-height: 16px; 
    font-weight: 700; 
    letter-spacing: 1.4px; 
    text-transform: uppercase; 
    margin-bottom: 16px;
`; 

export const Heading = styled.h1`
    margin-bottom: 24px; 
    font-size: 48px; 
    line-height: 1.1; 
    font-weight: 600; 
    color: #FDD135; 

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px; 
    margin-bottom: 35px; 
    font-size: 18px; 
    line-height: 24px; 
    color: #FDD135; 
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 

    @media screen and (max-width: 400px) {
        height: 50%;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex; 
    flex-direction: column; 
    justify-content: center; 

    @media screen and (max-width: 480px) {
        padding: 10px; 
    }
`;

export const Form = styled.form`
    background: #67AB8E;
    max-width: 400px; 
    height: auto; 
    width: 100%;
    z-index: 1; 
    display: grid; 
    margin: 0 auto; 
    padding: 40px 32px; 
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 24px; 
        padding-bottom: 24px;
    }
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px; 
    color: #000; 
`; 

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 20px; 
    border: none; 
    border-radius: 4px; 
`; 

export const FormButton = styled.button`
    background: #FDD135; 
    padding: 16px 0; 
    border-radius: 4px; 
    color: #000;
    font-size: 20px; 
    cursor: pointer; 
`;