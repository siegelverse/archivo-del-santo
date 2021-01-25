import styled from 'styled-components'

export const WatchContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px;) {
        height: 1300px;
    }
`;

export const WatchWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px; 
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const WatchCard = styled.div`
    background: #fff; 
    display: flex; 
    flex-direction: flex-start; 
    align-items: center; 
    border-radius: 10px; 
    max-height: 340px; 
    padding: 30px;
    box-shadow: 0 1px 3px rbga(0,0,0,0.2);
    transition: all 0.2 ease-in-out; 
    
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out; 
        cursor: pointer; 
    }
`;

export const WatchPoster = styled.img`
    height: 260px; 
    width: 200px; 
    margin-bottom: 10px; 
`;

export const WatchH1 = styled.h1`
    font-size: 3.5rem; 
    color: #FDD135;
    margin-bottom: 60px; 
`
