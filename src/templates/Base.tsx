import React from 'react';

import { Hero } from '@/component/Hero';
import { BACKGROUND_COLOR } from '@/utils/constants';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Base = () => {
  return (
    <div style={{ backgroundColor: BACKGROUND_COLOR }}>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="vh-100 flex min-h-screen items-center justify-center p-10 sm:p-0">
        <Hero />
      </div>
    </div>
  );
};

export { Base };
