import { CART_ADD_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      // if item is alread in cart
      // x.product is the id
      const existItem = state.cartItems.find(x => x.product === item.product)

      if (item === existItem) {
        return {
          ...state,

          //  section 6 32 cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
    default:
      return state
  }
}