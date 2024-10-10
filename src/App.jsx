import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Carousel from './Component/Carousel'
import BasicComponent from './Component/BasicComponent'
import VideoComponent from './Component/VideoComponent'
import News from './Component/News'

function App() {

  return (
    <>
      <Navbar />
      <Carousel />
      <BasicComponent />
      <VideoComponent />
      <News />
    </>
  )
}

export default App
