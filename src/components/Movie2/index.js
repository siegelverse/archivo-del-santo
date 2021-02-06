import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { FiYoutube } from 'react-icons/fi'
import {
    MovieContainer,
    VideoWrapper,
    MovieH1, 
    Back,
    MobileVid
} from '../Movie1/MovieElements'

const Movie2 = () => {
    useEffect( () => {
        window.scrollTo(0, 0);
    },[]);
    return (
        <MovieContainer>
            <Back to='/'>
                <IoMdArrowRoundBack size={40}/>
            </Back>
            <MovieH1>Santo Contra El Hacha Diabólica</MovieH1>
            <MobileVid href='https://www.youtube.com/watch?v=w9yrLkKH0iM&ab_channel=DescargasSkydrive'>
                <FiYoutube size={70} />
            </MobileVid>
            <VideoWrapper>
                <ReactPlayer url='https://www.youtube.com/watch?v=w9yrLkKH0iM&ab_channel=DescargasSkydrive' controls='true' />
            </VideoWrapper>
        </MovieContainer>
    )
}

export default Movie2
