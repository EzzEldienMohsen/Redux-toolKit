import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import {
  removeItem,
  itemIncrease,
  itemDecrease,
} from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
const CartItem = ({ id, img, title, price, amount }) => {
  var dispatch = useDispatch()
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <div className="item-price">${price}</div>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id))
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(itemIncrease(id))}
        >
          <ChevronUp />
        </button>
        <div className="amount">{amount}</div>
        <button
          className="amount-btn"
          onClick={
            amount === 1
              ? () => dispatch(removeItem(id))
              : () => dispatch(itemDecrease(id))
          }
        >
          <ChevronDown />
        </button>
      </div>
    </div>
  )
}

export default CartItem
