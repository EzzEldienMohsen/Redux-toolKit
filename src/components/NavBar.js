import React from 'react'
import { CartIcon } from '../icons'
import { useSelector } from 'react-redux'
const NavBar = () => {
  var { amount } = useSelector((store) => store.cart)
  return (
    <nav>
      <div className="nav-center">
        <h2>Redux toolkit</h2>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <div className="total-amount">{amount}</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
