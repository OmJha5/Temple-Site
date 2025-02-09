import React from 'react'
import Navbar from "./Navbar"
import ImageCarousel from './ImageCarousel'
import AboutHome from './AboutHome'
import Programms from './Programms'
import GallaryHome from './GallaryHome'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
        <div >
            <Navbar />
            <ImageCarousel/>
            <Programms/>

            <AboutHome/>

            <GallaryHome/>

            <Footer/>
        </div>
    </div>
  )
}
