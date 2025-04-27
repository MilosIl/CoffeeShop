import { useLocation } from 'react-router';
const Container = ({ children, className }) => {
  const { pathname } = useLocation();
  const isLoginOrRegister = pathname === '/login' || pathname === '/register';
  return (
    <main
      className={`font-montserrat  ${className} ${isLoginOrRegister ? null : 'mx-auto px-4 container'} h-full`}
    >
      {children}
    </main>
  );
};

export { Container };
