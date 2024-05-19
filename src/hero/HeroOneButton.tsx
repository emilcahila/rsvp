import React from 'react';

type IHeroOneButtonProps = {
  title: React.ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
  </header>
);

export { HeroOneButton };
