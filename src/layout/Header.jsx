import { Link } from 'react-router';
import { Button } from '../components/ui';
import { IconLogo } from '../assets/icons';

const Header = () => {
  return (
    <header className="flex justify-between items-center shadow-[0px_3px_7px_0px_#00000026] mb-5 px-3.5 py-5 rounded-b-lg">
      <IconLogo />
      <Button
        className="bg-light-blue px-5 py-1 rounded-md text-btn text-white"
        icon={''}
      >
        <Link to="/login">Prijavi se</Link>
      </Button>
    </header>
  );
};

export { Header };
