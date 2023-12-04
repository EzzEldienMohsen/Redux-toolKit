import React from 'react'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../features/modal/modalSlice'
const CartContainer = () => {
  var { items, amount, total } = useSelector((store) => store.cart)
  var dispatch = useDispatch()
  if (amount < 1) {
    return (
      <div className="cart">
        <header>
          <h2>you bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </div>
    )
  }
  return (
    <div className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {items.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModal())
          }}
        >
          clear cart
        </button>
      </footer>
    </div>
  )
}

export default CartContainer
