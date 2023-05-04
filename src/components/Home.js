import React from 'react'
import { Container } from 'react-bootstrap'
import Featured from './Featured'
import Slider from "../Slider"
const Home = () => {
  return (
    <Container>
     <Slider/>
     <Featured/>
    </Container>
  )
}

export default Home