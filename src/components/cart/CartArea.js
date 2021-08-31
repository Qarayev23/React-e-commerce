import React from 'react'
import CartList from './CartList'
import CartTotals from './CartTotals'

const CartArea = () => {
    return (
        <section className="section cart-area">
            <div className="container">
                <div className="responsive-cart-area">
                    <form className="cart-form">
                        <CartList />
                        <CartTotals />
                    </form>
                </div>
            </div>

        </section>
    )
}

export default CartArea
