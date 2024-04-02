import React from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Hero } from './Hero';
import SeparatorImage from './SeparatorImage';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <SeparatorImage />
      <VerticalFeatures />
      <SeparatorImage />
      <Banner />
    </div>
  );
};

export { Base };
