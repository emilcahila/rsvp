import React from 'react';

const Hero = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="font-LibreBaskervilleBold text-10xl flex w-full items-center justify-center">
        <div className="wrap">
          <div className="box">
            <div className="top-border border"></div>
          </div>
          <div className="box text-6xl text-white">
            <div className="figure">
              <div className="mt-8 leading-tight">12</div>
              <div className="leading-tight">14</div>
              <div className="mb-8 leading-tight">24</div>
            </div>
          </div>
          <div className="box">
            <div className="bottom-border border"></div>
          </div>
        </div>
        <div className="ml-4 flex-col items-center text-white">
          <div className="mb-20 ">
            <p className="font-Scriptina" style={{ fontSize: '10rem' }}>
              Analyn
            </p>
          </div>
          <div className="text-center" style={{ marginRight: '10rem' }}>
            <p className="font-LibreBaskervilleBold p-1 text-2xl">AND</p>
          </div>
          <div className="text-right">
            <p
              className="font-Scriptina"
              style={{ fontSize: '10rem', lineHeight: '8rem' }}
            >
              Ryan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
