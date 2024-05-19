import React from 'react';

import { BACKGROUND_COLOR } from '@/utils/constants';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Hero } from './Hero';

const Base = () => {
  return (
    <div style={{ backgroundColor: BACKGROUND_COLOR }}>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Banner />
    </div>
  );
};

export { Base };
