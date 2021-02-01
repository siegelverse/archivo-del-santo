import React from 'react'
import ReactPlayer from 'react-player'
import {
    MovieContainer,
    VideoWrapper,
    MovieH1
} from '../Movie1/MovieElements'

const Movie2 = () => {
    return (
        <MovieContainer>
            <MovieH1>Santo Contra El Hacha Diabólica</MovieH1>
            <VideoWrapper>
                <ReactPlayer url='https://www.youtube.com/watch?v=w9yrLkKH0iM&ab_channel=DescargasSkydrive' controls='true' />
            </VideoWrapper>
        </MovieContainer>
    )
}

export default Movie2
