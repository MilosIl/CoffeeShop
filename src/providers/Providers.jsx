import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from './CartProvider/';
import { BrowserRouter } from 'react-router';
const Providers = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>{children}</CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export { Providers };
