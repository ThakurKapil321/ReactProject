import { createContext, useReducer } from "react";

export const cartContext = createContext();

const initialState = [];

function cartReducer(cart, action) {

  switch (action.type) {

    // ADD CAR
    case "ADD": {

      const existingCar = cart.find(
        (item) => item.id === action.product.id
      );

      if (existingCar) {
        return cart.map((item) =>
          item.id === action.product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...cart,
        {
          ...action.product,
          quantity: 1,
        },
      ];
    }


    // UPDATE QUANTITY
    case "UPDATE_CART":

      return cart.map((item) =>
        item.id === action.id
          ? {
              ...item,
              quantity: action.quantity,
            }
          : item
      );


    // DELETE / REMOVE
    case "DELETE_CART":

      return cart.filter(
        (item) => item.id !== action.id
      );


    default:
      return cart;
  }
}


export function CartProvider({ children }) {

  const [cart, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  return (
    <cartContext.Provider
      value={{
        cart,
        dispatch,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}