import React from 'react'
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
    return (
        <MovieContainer>
            <Back to='/'>
                <IoMdArrowRoundBack size={40}/>
            </Back>
            <MovieH1>Santo vs El Estrangulador</MovieH1>
            <MobileVid href='https://www.youtube.com/watch?v=eqTXr3JrpXU&t=1365s&ab_channel=QUASARTV'>
                <FiYoutube size={70} />
            </MobileVid>
            <VideoWrapper>
                <ReactPlayer url='https://www.youtube.com/watch?v=eqTXr3JrpXU&t=1365s&ab_channel=QUASARTV' controls='true' />
            </VideoWrapper>
        </MovieContainer>
    )
}

export default Movie1
