import { Route, Routes } from 'react-router';
import {
  HomePage,
  RegisterPage,
  LoginPage,
  OrderPage,
  OrdersPage,
} from '../pages/';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage';

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/orders/:id" element={<OrderPage />} />
      <Route path="/orders/" element={<OrdersPage />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
    </Routes>
  );
};
export { AppRouter };
