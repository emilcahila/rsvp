import React from 'react';

import { BACKGROUND_COLOR } from '@/utils/constants';

import { Hero } from '../component/Hero';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Base = () => {
  return (
    <div style={{ backgroundColor: BACKGROUND_COLOR }}>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
    </div>
  );
};

export { Base };
