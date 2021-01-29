import React from 'react'
import { useHistory }  from 'react-router-dom'
import poster from '../../images/santo-vs-estrang.jpg'
import poster2 from '../../images/santo-vs-hacha.jpg'
import poster3 from '../../images/santo-vs-villanos.jpg'
import poster4 from '../../images/santo-vs-zomb.jpg'
import { WatchCard, WatchContainer, WatchH1, WatchPoster, WatchWrapper } from './WatchElements'

const WatchSection = () => {
    const history = useHistory()
    return (
        <WatchContainer id="watch">
            <WatchH1>Watch</WatchH1>
            <WatchWrapper>
                <WatchCard onClick={() => history.push('/watch/s-v-estrang')}>
                    <WatchPoster src={poster} />
                </WatchCard>
                <WatchCard onClick={() => history.push('/watch/s-v-hacha')}>
                    <WatchPoster src={poster2} />
                </WatchCard>
                <WatchCard onClick={() => history.push('/watch/s-v-villanos')}>
                    <WatchPoster src={poster3} />
                </WatchCard>
                <WatchCard onClick={() => history.push('/watch/s-v-zomb')}>
                    <WatchPoster src={poster4} />
                </WatchCard>
            </WatchWrapper>
        </WatchContainer>
    )
}

export default WatchSection
