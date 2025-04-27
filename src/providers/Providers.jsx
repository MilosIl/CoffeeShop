import { CartProvider } from './CartProvider/';
import { BrowserRouter } from 'react-router';
const Providers = ({ children }) => {
  return (
    <BrowserRouter>
      <CartProvider>{children}</CartProvider>;
    </BrowserRouter>
  );
};

export { Providers };
