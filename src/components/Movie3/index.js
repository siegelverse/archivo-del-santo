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

const Movie3 = () => {
    useEffect( () => {
        window.scrollTo(0, 0);
    },[]);
    return (
        <MovieContainer>
            <Back to='/'>
                <IoMdArrowRoundBack size={40}/>
            </Back>
            <MovieH1>Santo vs Los Villanos Del Ring</MovieH1>
            <MobileVid href='https://www.youtube.com/watch?v=3vaiSXO4s6c&ab_channel=CineTarantino'>
                <FiYoutube size={70} />
            </MobileVid>
            <VideoWrapper>
                <ReactPlayer url='https://www.youtube.com/watch?v=3vaiSXO4s6c&ab_channel=CineTarantino' controls='true' />
            </VideoWrapper>
        </MovieContainer>
    )
}

export default Movie3
