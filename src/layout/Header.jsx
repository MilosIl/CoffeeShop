import { Link, useLocation } from 'react-router';
import { Button } from '@/components/ui';
import { IconLogo, IconBackArrow } from '@/assets/icons';

const Header = () => {
  const { pathname } = useLocation();
  const isLoginOrRegister = pathname === '/login' || pathname === '/register';
  return (
    <header
      className={`text-montserrat flex ${pathname === '/orders' ? 'justify-center' : 'justify-between'} items-center shadow-[0px_3px_7px_0px_#00000026] ${isLoginOrRegister ? null : 'mb-5'}  px-3.5 py-5 rounded-b-lg h-15`}
    >
      {pathname === '/orders' ? (
        <Link to="/">
          <IconLogo />
        </Link>
      ) : isLoginOrRegister ? (
        <Link to="/">
          <IconBackArrow />
        </Link>
      ) : (
        <>
          <Link to="/">
            <IconLogo />
          </Link>
          <Button className="bg-light-blue px-5 py-1 rounded-md text-btn text-white">
            <Link to="/login">Prijavi se</Link>
          </Button>
        </>
      )}
    </header>
  );
};

export { Header };
