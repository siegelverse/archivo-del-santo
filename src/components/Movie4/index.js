import React from 'react'
import ReactPlayer from 'react-player'
import {
    MovieContainer,
    VideoWrapper,
    MovieH1
} from '../Movie1/MovieElements'

const Movie4 = () => {
    return (
        <MovieContainer>
            <MovieH1>Santo Contra Los Zombies</MovieH1>
            <VideoWrapper>
                <ReactPlayer url='https://www.youtube.com/watch?v=uY8Hh9a2zcA&ab_channel=zombieslang' controls='true' />
            </VideoWrapper>
        </MovieContainer>
    )
}

export default Movie4