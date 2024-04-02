import React from 'react';

import { useCountdown } from '@/hooks/countdown';
import DateTimeDisplay from '@/templates/DateTimeDisplay';

type ShowCounterProps = {
  days: number | undefined;
  hours: number | undefined;
  minutes: number | undefined;
  seconds: number | undefined;
};

const ShowCounter: React.FC<ShowCounterProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <div className="show-counter">
      <a target="_blank" rel="noopener noreferrer" className="countdown-link">
        <DateTimeDisplay value={days} type={'Days'} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} />
      </a>
    </div>
  );
};

type CountdownTimerProps = {
  targetDate: string;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [days, hours, minutes, seconds]: number[] = useCountdown(targetDate);

  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};

export default CountdownTimer;
