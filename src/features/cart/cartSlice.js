import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
var url = 'https://course-api.com/react-useReducer-cart-project'
var initialState = {
  items: [],
  amount: 4,
  total: 0,
  isLoading: true,
}

export var getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err))
})
var cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = []
    },
    removeItem: (state, action) => {
      var itemId = action.payload
      state.items = state.items.filter((item) => item.id !== itemId)
    },
    itemIncrease: (state, action) => {
      var itemId = action.payload
      var items = state.items.find((item) => item.id === itemId)
      items.amount = items.amount + 1
    },
    itemDecrease: (state, action) => {
      var itemId = action.payload
      var items = state.items.find((item) => item.id === itemId)
      items.amount = items.amount - 1
    },
    calculateTotals: (state) => {
      var amount = 0
      var total = 0
      state.items.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        console.log(action)
        state.isLoading = false
        state.items = action.payload
      })
      .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false
      })
  },
})
export var {
  clearCart,
  removeItem,
  itemIncrease,
  itemDecrease,
  calculateTotals,
} = cartSlice.actions
export default cartSlice.reducer
