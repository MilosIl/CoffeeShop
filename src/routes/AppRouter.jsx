import { Route, Routes } from 'react-router';
import { HomePage, RegisterPage, LoginPage } from '../pages/';

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
export { AppRouter };
