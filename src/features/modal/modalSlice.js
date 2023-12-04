import { createSlice } from '@reduxjs/toolkit'

var initialState = {
  isOpen: false,
}
var modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true
    },
    closeModal: (state, action) => {
      state.isOpen = false
    },
  },
})

export var { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
