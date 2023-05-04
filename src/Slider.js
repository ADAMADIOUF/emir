import React, { useState, useEffect } from 'react'
import sliderData from './dataSlider'


function Slider() {
  const [popupImage, setPopupImage] = useState(null)
  const [popupText, setPopupText] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length)
    }, 5000)
    return () => clearInterval(intervalId)
  }, [])

  const handleImageClick = (imageSrc) => {
    setPopupImage(imageSrc)
  }

  const handleClosePopup = () => {
    setPopupImage(null)
  }

  const handleTextClick = (text) => {
    setPopupText(text)
  }

  const handleTextClose = () => {
    setPopupText(null)
  }

  return (
    <div className='slider'>
      {sliderData.map((slide, index) => (
        <div
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          key={index}
          onClick={() => handleTextClick(slide.text)}
        >
          <img
            src={slide.img}
            alt={`Slide ${index + 1}`}
            onClick={() => handleImageClick(slide.img)}
          />
          <div className='slide-caption'>
            
            <p>{slide.desc}</p>
          </div>
        </div>
      ))}
      {popupImage && (
        <div className='popup'>
          <div className='popup-inner'>
            <img src={popupImage} alt='Popup Image' />
            <div className='popup-close' onClick={handleClosePopup}>
              X
            </div>
          </div>
        </div>
      )}
      {popupText && (
        <div className='popup'>
          <div className='popup-inner'>
            <h2>{popupText}</h2>
            <div className='popup-close' onClick={handleTextClose}>
              X
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Slider
