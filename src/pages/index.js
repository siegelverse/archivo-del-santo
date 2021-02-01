import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import WatchSection from '../components/WatchSection'
import SignupSection from '../components/SignupSection'


const Home = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false)
    console.log(user)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} user={user} />
            <HeroSection />
            <AboutSection />
            <WatchSection />
            <ContactSection />
            <SignupSection />
        </>
    )
}

export default Home
