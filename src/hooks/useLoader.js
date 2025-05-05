import { useEffect, useState } from 'react';

const LOADER_TIME = 300;

const useLoader = (time = LOADER_TIME) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, time);

    return () => clearTimeout(timer);
  }, [time]);
  return isLoading;
};

export { useLoader };
