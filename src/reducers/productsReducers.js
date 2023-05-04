import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productsConstants'

export const productListReducer = (
  state = { products: [], featured_products: [] },
  action
) => {
  if (action.type === PRODUCT_LIST_REQUEST) {
    
    return { loading: true, products: [] }
  }
  if (action.type === PRODUCT_LIST_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    )
    return { loading: false, products: action.payload, featured_products }
  }
  if (action.type === PRODUCT_LIST_FAIL) {
    return { loading: false, error: action.payload }
  }
  return state
}


export const productDetailsReducer = (
  state = { product: {  } },
  action
) => {
  if (action.type === PRODUCT_DETAILS_REQUEST) {
    return { loading: true, ...state }
  }
  if (action.type === PRODUCT_DETAILS_SUCCESS) {
    return { loading: false, product: action.payload }
  }
  if (action.type === PRODUCT_DETAILS_FAIL) {
    return { loading: false, error: action.payload }
  }
  return state
}
