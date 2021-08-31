export const cartReducer = (state, action) => {
    let { cart } = state
    const { id, price } = action

    switch (action.type) {
        case 'ADD_TO_CART':
            const check = cart.some(item => item.id === action.item.id)
            if (!check) {
                return {
                    cart: [{ ...action.item, count: 1, amount: action.item.price, }, ...cart],
                }
            } else {
                return {
                    cart: cart.map(item => item.id === action.item.id ?
                        { ...item, count: item.count + 1, amount: item.amount + action.item.price } : item),
                }
            }


        case "INCREASE":
            return {
                cart: cart.map(item => item.id === id ?
                    { ...item, count: item.count + 1, amount: item.amount + price } : item),
            }


        case "DECREASE":
            return {
                cart: cart.map(item => item.id === id ? { ...item, count: item.count - 1, amount: item.amount - price } : item)
                    .filter(item => item.count !== 0),
            }


        case "DELETE":
            return {
                cart: cart.filter((item) => item.id !== id),
            }

        default:
            return state;
    }
}