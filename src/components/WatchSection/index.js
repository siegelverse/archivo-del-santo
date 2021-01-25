import React from 'react'
import poster from '../../images/santo-vs-estrang.jpg'
import poster2 from '../../images/santo-vs-hacha.jpg'
import poster3 from '../../images/santo-vs-villanos.jpg'
import poster4 from '../../images/santo-vs-zomb.jpg'
import { WatchCard, WatchContainer, WatchH1, WatchPoster, WatchWrapper } from './WatchElements'

const WatchSection = () => {
    return (
        <WatchContainer id="watch">
            <WatchH1>Watch</WatchH1>
            <WatchWrapper>
                <WatchCard>
                    <WatchPoster src={poster} />
                </WatchCard>
                <WatchCard>
                    <WatchPoster src={poster2} />
                </WatchCard>
                <WatchCard>
                    <WatchPoster src={poster3} />
                </WatchCard>
                <WatchCard>
                    <WatchPoster src={poster4} />
                </WatchCard>
            </WatchWrapper>
        </WatchContainer>
    )
}

export default WatchSection
