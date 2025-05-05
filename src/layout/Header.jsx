import { Link, useLocation } from 'react-router';
import { IconLogo, IconBackArrow } from '@/assets/icons';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/';
const Header = () => {
  const { pathname } = useLocation();
  const { user, logout } = useAuth();

  const isLoginOrRegister = pathname === '/login' || pathname === '/register';
  const isProfilePage = pathname.startsWith('/profile/');
  return (
    <header
      className={`font-montserrat flex ${pathname === '/orders' ? 'justify-center' : 'justify-between'} items-center shadow-[0px_3px_7px_0px_#00000026] ${isLoginOrRegister ? null : 'mb-5'}  px-3.5 py-5 rounded-b-lg h-15`}
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
          {user ? (
            <div className="flex items-center gap-4">
              {isProfilePage ? (
                <button
                  className="font-medium text-light-blue text-sm underline"
                  onClick={logout}
                >
                  Log out
                </button>
              ) : (
                <span className="cursor-pointer">
                  <Link to={`/profile/${user.id}`}>{user.fullName}</Link>
                </span>
              )}
            </div>
          ) : (
            <Button className="bg-light-blue px-5 py-1 rounded-md text-btn text-white">
              <Link to="/login">Prijavi se</Link>
            </Button>
          )}
        </>
      )}
    </header>
  );
};

export { Header };
