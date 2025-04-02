import { Route, Routes } from 'react-router';
import { HomePage, RegisterPage, LoginPage, OrderPage } from '../pages/';

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/orders/:id" element={<OrderPage />} />
    </Routes>
  );
};
export { AppRouter };
