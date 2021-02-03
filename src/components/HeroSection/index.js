import React, { useState } from 'react';
import logo from '../../images/ads_logo.PNG'
import { Button } from '../ButtonElement'
import { 
    HeroContainer, 
    HeroBg,  
    ImgBg,
    HeroContent,
    LogoImg, 
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
        <HeroContainer id='home'>
            <HeroBg>
                <ImgBg />
            </HeroBg>
            <HeroContent>
                <LogoImg src={logo} />
                <HeroBtnWrapper>
                    <Button 
                    to="watch" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary='true' 
                    dark='true'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>
                        Start Watching {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
