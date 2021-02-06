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

const Movie4 = () => {
    useEffect( () => {
        window.scrollTo(0, 0);
    },[]);
    return (
        <MovieContainer>
            <Back to='/'>
                <IoMdArrowRoundBack size={40}/>
            </Back>
            <MovieH1>Santo Contra Los Zombies</MovieH1>
            <MobileVid href='https://www.youtube.com/watch?v=uY8Hh9a2zcA&ab_channel=zombieslang'>
                <FiYoutube size={70} />
            </MobileVid>
            <VideoWrapper>
                <ReactPlayer url='https://www.youtube.com/watch?v=uY8Hh9a2zcA&ab_channel=zombieslang' controls='true' />
            </VideoWrapper>
        </MovieContainer>
    )
}

export default Movie4