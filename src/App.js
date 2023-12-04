/* eslint-disable react-hooks/exhaustive-deps */
import CartContainer from './components/CartContainer'
import NavBar from './components/NavBar'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'
import Modal from './components/Modal'
function App() {
  var { isOpen } = useSelector((store) => store.modal)
  var { items, isLoading } = useSelector((store) => store.cart)
  var dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getCartItems())
  }, [])
  React.useEffect(() => {
    dispatch(calculateTotals())
  }, [items])
  if (isLoading) {
    return (
      <div className="loading">
        <h1>loading...</h1>
      </div>
    )
  }
  return (
    <>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </>
  )
}
export default App
