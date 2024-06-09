import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slides/productSlide'
import userReducer from './slides/userSlide'

export default configureStore({
  reducer: {
    product: productReducer,
    user: userReducer
  }
})