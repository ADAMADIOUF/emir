import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import WhatsAppWidget from './Whatsap'
import 'react-whatsapp-widget/dist/index.css'


import {
  Container,
  Row,
  Col,
  Button,
  ListGroupItem,
  FormControl,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productsActions'
import Loader from './Loader'
import Message from './Message'
import ProductImages from './ProductImages'
import { formatPrice } from '../utils/helpers'


const ProductDetails = () => {
  const [qty, setQty] = useState(1)
  const { id } = useParams()
  const dispatch = useDispatch()

  // Pass `true` as the second argument to get the selected product from the state
  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

const location = useLocation()

useEffect(() => {
  window.scrollTo(0, 0)
}, [location])

  useEffect(() => {
    // Pass `true` as the second argument to get the selected product from the state
    dispatch(listProductDetails(id, true))
  }, [dispatch, id])
const [showWhatsAppWidget, setShowWhatsAppWidget] = useState(false)
const handleAddToCart = () => {
  const message = `Je veux acheter ${product.name} x${qty}`
  const url = `https://wa.me/+221777618072?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

  return (
    <Container className='my-5'>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col xs={12} md={6}>
            {/* Display product image */}
            <ProductImages images={product.img} />
          </Col>
          <Col xs={12} md={6}>
            <article>
              <div className='singleProduct-details'>
                <h3>{product.name}</h3>
                <div className='s-p'>
                  <h3>{product.price}CFA</h3>
                  <p>
                    {product.description}
                  </p>
                </div>
              </div>
            </article>
            <article className='cartDetails'>
              <Row>
                <Col>Price:</Col>
                <Col>{formatPrice(product.price)}</Col>
              </Row>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? 'En stock.' : 'Out of stock'}
                </Col>
              </Row>
              {product.countInStock > 0 && (
                <ListGroupItem>
                  <Row>
                    <Col>Qty</Col>

                    <Col>Qty</Col>
                    <Col>
                      <FormControl
                        as='select'
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </FormControl>
                    </Col>
                  </Row>
                </ListGroupItem>
              )}
              <ListGroupItem>
                <Button onClick={handleAddToCart}>ajouter au panier</Button>
                {showWhatsAppWidget && (
                  <WhatsAppWidget
                    phoneNumber='+221777618072'
                    message={`
je veux acheter ${product.name}`}
                  />
                )}
              </ListGroupItem>
            </article>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default ProductDetails
