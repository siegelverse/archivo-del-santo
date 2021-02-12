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
} from './MovieElements'

const Movie1 = () => {
    useEffect( () => {
        window.scrollTo(0, 0);
    },[]);
    return (
        <MovieContainer>
            <Back to='/'>
                <IoMdArrowRoundBack size={40}/>
            </Back>
            <MovieH1>Santo vs El Estrangulador</MovieH1>
            <MobileVid href='https://youtu.be/eqTXr3JrpXU'>
                <FiYoutube size={70} />
            </MobileVid>
            <VideoWrapper>
                <ReactPlayer url='https://youtu.be/eqTXr3JrpXU' controls='true' />
            </VideoWrapper>
        </MovieContainer>
    )
}

export default Movie1
