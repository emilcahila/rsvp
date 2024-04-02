import React from 'react';

type DateTimeDisplayProps = {
  value: number | undefined;
  type: string;
};

const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({ value, type }) => {
  return (
    <div className={'countdown'}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
