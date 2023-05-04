import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productsReducers'


const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  
})

const initialState = {  }

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
