import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import { listProducts } from '../actions/productsActions'
import { formatPrice } from '../utils/helpers'

const Featured = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { featured_products: products, loading, error } = productList

  // Call the fetchProducts action creator when the component mounts
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

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
      <Container className='mt-5'>
        <Row>
          {products.map((product) => {
            const { name, price, id, img } = product
            const imageUrl = img && img.length > 0 ? img[0].url : ''

            return (
              <Col key={id} xs={6} sm={6} md={4} lg={4} className='mb-4'>
                <Link to={`/products/${id}`}>
                  <Card>
                    <Card.Img variant='top' src={imageUrl} />
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                      <Card.Text>{formatPrice(price)}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default Featured
