import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router';

const NotFound = () => {
  const redirect = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      redirect('/');
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="my-8 font-bold text-3xl">404 - Stranica nije pronađena</h1>
      <div>
        <p className='font-semibold text-lg'>Žao nam je, ali stranica koju tražite ne postoji.</p>
        <Link to="/" className="text-dark-blue underline">
          Početna strana
        </Link>
      </div>
    </div>
  );
};

export { NotFound };
