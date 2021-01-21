import React, { useState } from 'react';
import logo from '../../images/ads_logo.PNG'
import { Button } from '../ButtonElement'
import { 
    HeroContainer, 
    HeroBg,  
    HeroContent,
    LogoImg, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg />
            <HeroContent>
                <LogoImg src={logo} />
                {/* <HeroP>
                    The Complete Santo Film Guide
                </HeroP> */}
                <HeroBtnWrapper>
                    <Button to="watch" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Start Watching {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
