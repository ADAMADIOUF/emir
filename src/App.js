import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from "./Navbar"

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import SingleProducts from './components/SingleProducts'

import Products from './components/Products'
import Footer from './components/Footer'
import TopNav from './components/TopNav'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <TopNav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<SingleProducts />} />
        <Route path='/boutique' element={<Products />} />
       
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App