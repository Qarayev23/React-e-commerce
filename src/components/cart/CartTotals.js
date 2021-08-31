import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'

const CartTotals = () => {
    const { cart } = useContext(cartContext)

    const totalPrice = cart.reduce((acc, element) => {
        return acc + element.price * element.count
    }, 0)

    const totalQuantity = cart.reduce((acc, element) => {
        return acc + element.count
    }, 0)

    if (totalQuantity !== 0) {
        return <div className="cart-totals">
            <h3>Cart Summary</h3>
            <ul>
                <li>
                    <span>Total Items</span>
                    <span>{totalQuantity}</span>
                </li>
                <li>
                    <span>Total price</span>
                    <span>${totalPrice}</span>
                </li>
            </ul>
            <a href="#">Pay With Card</a>
        </div>
    } else {
        return null
    }
}

export default CartTotals
