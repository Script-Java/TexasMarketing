import React from 'react'
import Navbar from '../components/navbar'
import Landing from '../components/landing'
import Stats from '../components/stats'
import Portfolio from '../components/portfolio'
import Footer from '../components/footer'

const HomePage = ()=> {

    return (
        <div className="">
            <Navbar></Navbar>
            <Landing></Landing>
            <Stats></Stats>
            <Portfolio></Portfolio>
            <Footer></Footer>
        </div>
    )
}

export default HomePage