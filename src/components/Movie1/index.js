import React from 'react'
import ReactPlayer from 'react-player'
import {
    MovieContainer,
    VideoWrapper,
    MovieH1
} from './MovieElements'

const Movie1 = () => {
    return (
        <MovieContainer>
            <MovieH1>Santo vs El Estrangulador</MovieH1>
            <VideoWrapper>
                <ReactPlayer url='https://www.youtube.com/watch?v=eqTXr3JrpXU&t=1365s&ab_channel=QUASARTV' controls='true' />
            </VideoWrapper>
        </MovieContainer>
    )
}

export default Movie1
