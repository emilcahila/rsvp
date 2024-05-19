import React from 'react';

import { HeroOneButton } from '../hero/HeroOneButton';

const Hero = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <HeroOneButton
        title={
          <div className="flex w-full">
            <div className="flex-col items-center">
              <p className="font-Scriptina text-10xl pb-16 text-white">
                Analyn
              </p>
              <div className="flex items-center">
                <p className="font-LibreBaskervilleBold p-1 text-base text-white">
                  AND
                </p>
                <p className="font-Scriptina text-10xl p-1 pt-5 text-white">
                  Ryan
                </p>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export { Hero };
