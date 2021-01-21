import React from 'react';
import { HeroContainer, HeroBg, ImgBg } from './HeroElements'
import backgroundimg from '../../images/home_bg.jpg'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg />
            </HeroBg>
            {/* <HeroContent>
                <HeroP>The Complete El Santo Film Guide</HeroP>
            </HeroContent> */}
        </HeroContainer>
    )
}

export default HeroSection
