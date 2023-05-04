import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import { useHistory, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { listProducts } from '../actions/productsActions'
import { formatPrice } from '../utils/helpers'

const Products = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const productList = useSelector((state) => state.productList)
  const { products, loading, error } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const handleCardClick = (id) => {
    navigate(`/products/${id}`)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    )
  } else if (error) {
    return <Message variant='danger'>{error}</Message>
  } else {
    return (
      <Container className='my-5'>
        <Slider {...settings}>
          {products.map((product) => {
            const { id, img, name, price } = product
            return (
              <div key={id}>
                <Card onClick={() => handleCardClick(id)}>
                  <Card.Img variant='top' src={img[1].url} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{formatPrice(price)}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </Slider>
      </Container>
    )
  }
}

export default Products
