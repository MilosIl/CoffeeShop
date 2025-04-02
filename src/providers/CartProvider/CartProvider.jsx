import {
  CartContext,
  CartReducer,
  CartInitialState,
} from '@/context/CartContext';
import { useMemo, useReducer } from 'react';

const CartProvider = ({ children }) => {
  const [state, action] = useReducer(CartReducer, CartInitialState);
  const value = useMemo(
    () => ({
      state,
      action,
    }),
    [state, action]
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartProvider };

