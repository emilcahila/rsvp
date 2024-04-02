// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment-timezone';

import CountdownTimer from '@/countdown/countdownTimer';

const CountdownDisplay = () => {
  const targetDate = moment('2024-12-14').tz('Asia/Manila').toString();

  return (
    <div>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default CountdownDisplay;
