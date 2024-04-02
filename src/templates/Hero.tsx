import React from 'react';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => {
  return (
    // <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-20">
      <HeroOneButton
        title={
          <>
            <p className="font-VilaneExtraLight pb-5 text-2xl">
              Together with their families
            </p>
            <p className="font-Precious p-1 text-primary-700">Analyn</p>
            <p className="font-Precious pt-10 text-primary-700">& Ryan</p>
            <p className="font-VilaneExtraLight pt-5 text-2xl">
              Joyfully invite you to their wedding celebration
            </p>
          </>
        }
        button={<Button xl>RSVP</Button>}
        onClick={() => null}
      />
    </Section>
    // </Background>
  );
};

export { Hero };
