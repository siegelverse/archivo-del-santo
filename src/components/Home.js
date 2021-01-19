import React from 'react'
import '../css/Home.css'
import background from '../images/home_bg.jpg'
import logo from '../images/ads_logo.PNG'


export default function Home() {
    return (
        <div style={{ 
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
          }}>
              <img src={logo} alt='logo' className='logo'/>
              <button>help</button>
        </div>
    )
}
