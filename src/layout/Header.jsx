import { Link } from 'react-router';
import { Button } from '../components/ui';
import logo1 from '../assets/cafe-academy-logo.svg';

const Header = () => {
  return (
    <header className="flex justify-between items-center shadow-md mb-5 px-3.5 py-5 rounded-b-lg">
      <img src={logo1} alt="logo" className="h-[22px]" />
      <Button className="bg-light-blue px-5 py-1 rounded-md text-btn text-white">
        <Link to="/login">Prijavi se</Link>
      </Button>
    </header>
  );
};

export { Header };
