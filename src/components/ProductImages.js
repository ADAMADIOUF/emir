import { Image } from 'react-bootstrap'
import { useState } from 'react'

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0])

  return (
    <div>
      <div className='big-image-container'>
        <Image src={main.url} className='big-image' />
      </div>
      <div className='gallery-container'>
        {Array.isArray(images) &&
          images.map((image, index) => {
            return (
              <div key={index} onClick={() => setMain(image)}>
                <Image
                  src={image.url}
                  alt={image.filename}
                  className={`gallery-item ${
                    main.url === image.url ? 'active' : ''
                  }`}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ProductImages
