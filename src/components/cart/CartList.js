import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'

const CartList = () => {
    const { cart, dispatch } = useContext(cartContext)

    return (
        <div className="cart-container">
            <div className="cart-header">
                <ul>
                    <li><h4>PRODUCT</h4></li>
                    <li><h4>NAME</h4></li>
                    <li><h4>UNIT PRICE</h4></li>
                    <li><h4>QUANTITY</h4></li>
                    <li><h4>TOTAL</h4></li>
                </ul>
            </div>
            <div className="cart-body">
                {cart.length ? cart.map((product) => {
                    const { id, image, title, price, count, amount } = product
                    return <div className="cart-list" key={id}>
                        <div className="cart-img">
                            <div className="img-holder">
                                <img src={image} alt="" />
                            </div>
                        </div>
                        <div className="cart-name">
                            <h5>{title}</h5>
                        </div>
                        <div className="cart-price">
                            <span className="mob-screen">Price</span>
                            <span>${price}</span>
                        </div>
                        <div className="cart-quantity">
                            <div className="quantity-holder">
                                <button type="button" onClick={() => dispatch({ type: "DECREASE", id, price })} className="minus-btn">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <span className="counter-btn">{count}</span>
                                <button type="button" onClick={() => dispatch({ type: "INCREASE", id, price })} className="plus-btn">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <div className="cart-total">
                            <span className="mob-screen">Total</span>
                            <span>${amount}</span>
                            <button type="button" onClick={() => dispatch({ type: "DELETE", id, price, amount, count })}>
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                }) : <div className="empty">Your Cart is currently empty!</div>}
            </div>
        </div>
    )
}

export default CartList
