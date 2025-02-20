import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

const sliceName = 'cartItem'

const todoSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    AddProduct: (state, action) => {
      const newItem = {
        ...action.payload,
        quantity: 1,
        totalPrice: action.payload.productPrice
        // totalTax=
      }
      state.products.push(newItem)

      // console.log('state of store is:', current(state))
    },

    RemoveProduct: (state, action) => {
      state.products = state.products.filter(
        item => item.id !== action.payload.id
      )
    },

    IncQuantity: (state, action) => {
      const product = state.products.find(
        product => product.id === action.payload
      )
      if (product) {
        product.quantity += 1
        product.totalPrice = product.productPrice * product.quantity
      }
    },

    DecQuantity: (state, action) => {
      const product = state.products.find(
        product => product.id === action.payload
      )
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1
          product.totalPrice=product.totalPrice-product.productPrice;
        } else {
          state.products = state.products.filter(
            item => item.id !== action.payload
          )
        }
      }
    }
  }
})

export const { AddProduct, RemoveProduct, IncQuantity, DecQuantity } =
  todoSlice.actions
export default todoSlice.reducer
