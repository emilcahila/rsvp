import React from 'react';

const DateBox = () => (
  <>
    {/* Mobile view */}
    <div className="font-LibreBaskervilleBold text-4xl leading-tight text-white sm:hidden">
      <div className="flex items-center justify-center">
        <div className="mx-2 w-1/4 grow border-t border-white"></div>
        <div>12</div>
        <div className="mx-2 text-base">•</div>
        <div>14</div>
        <div className="mx-2 text-base">•</div>
        <div>24</div>
        <div className="mx-2 w-1/4 grow border-t border-white"></div>
      </div>
    </div>

    {/* Desktop view */}
    <div className="font-LibreBaskervilleBold relative hidden flex-col items-center text-center text-white sm:flex">
      <div className="relative">
        <div className="mt-4 before:absolute before:left-1/2 before:top-[-2.5rem] before:h-10 before:w-px before:-translate-x-1/2 before:bg-white"></div>
        <div className="text-6xl leading-tight">12</div>
      </div>
      <div className="text-6xl leading-tight">14</div>
      <div className="relative mb-4">
        <div className="text-6xl leading-tight">24</div>
        <div className="after:absolute after:left-1/2 after:top-full after:h-20 after:w-px after:-translate-x-1/2 after:bg-white"></div>
      </div>
    </div>
  </>
);

const DetailsContainer = () => (
  <div className="font-LibreBaskerville item-center mt-4 justify-center text-center text-white sm:ml-7 sm:mt-8 sm:text-center">
    <p className="text-base sm:text-lg">invite you to celebrate</p>
    <p className="text-base sm:text-lg">their love and marriage</p>
    <p className="mt-4 text-sm">SATURDAY, 14TH OF DECEMBER</p>
    <p className="text-sm sm:text-base">TWENTY TWENTY-FOUR</p>
    <p className="mt-4 text-sm">six o&apos;clock in the evening</p>
    <p className="text-sm">Lola Cafe, Pasay, Philippines</p>
  </div>
);

const MainHero = () => (
  <div className="flex flex-col items-center text-center text-white sm:mt-0 sm:text-left">
    <div className="mb-4 pt-4">
      <p className="font-Scriptina text-8xl sm:text-10xl">Analyn</p>
    </div>
    <div className="mt-12 sm:mt-20 sm:p-8">
      <p className="font-LibreBaskervilleBold text-lg sm:text-xl">AND</p>
    </div>
    <div className="mb-20 mt-0 sm:mt-0">
      <p
        className="font-Scriptina text-8xl sm:text-10xl"
        style={{ lineHeight: '0.75' }}
      >
        Ryan
      </p>
    </div>
  </div>
);

const Hero = () => (
  <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
    <div className="sm:col-span-1 sm:row-span-1">
      <DateBox />
    </div>
    <div className="flex items-center justify-center sm:col-span-1 sm:row-span-2">
      <MainHero />
    </div>
    <div className="sm:col-span-1 sm:row-span-1">
      <DetailsContainer />
    </div>
  </div>
);

export { Hero };
