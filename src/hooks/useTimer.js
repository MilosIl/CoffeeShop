import { useEffect, useState } from 'react';

const useTimer = (initTime) => {
  const [time, setTime] = useState(initTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time <= 0) {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [time]);
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return { time, hours, minutes, seconds };
};

export { useTimer };
