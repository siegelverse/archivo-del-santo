import React from 'react'
import ReactPlayer from 'react-player'
import {
    MovieContainer,
    VideoWrapper,
    MovieH1
} from '../Movie1/MovieElements'

const Movie3 = () => {
    return (
        <MovieContainer>
            <MovieH1>Santo vs Los Villanos Del Ring</MovieH1>
            <VideoWrapper>
                <ReactPlayer url='https://www.youtube.com/watch?v=3vaiSXO4s6c&ab_channel=CineTarantino' controls='true' />
            </VideoWrapper>
        </MovieContainer>
    )
}

export default Movie3
