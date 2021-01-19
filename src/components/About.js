import React from 'react'
import aboutImg from '../images/about_splash.jpg'

export default function About() {
    return (
        <div style={{
            backgroundColor: "black",
            height: '100vh',
            width: '100vw'
        }}>
            <img src={aboutImg} alt='about-img' width='500px'/>   
        </div>
    )
}
