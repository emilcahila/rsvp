import { useEffect, useState } from 'react';

const getReturnValues = (countDown: number) => {
  // calculate time left
  const days: number = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes: number = Math.floor(
    (countDown % (1000 * 60 * 60)) / (1000 * 60),
  );
  const seconds: number = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const useCountdown = (targetDate: string) => {
  const countDownDate = new Date(targetDate).valueOf();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

export { useCountdown };
