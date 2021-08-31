import React, { createContext, useReducer } from "react"
import { cartReducer } from "./cartReducer"
export const cartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, {
        cart: [],
    })

    return (
        <cartContext.Provider value={{ ...cart, dispatch }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider;
