import { CartProvider } from './CartProvider/CartProvider';

const Providers = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

export { Providers };
