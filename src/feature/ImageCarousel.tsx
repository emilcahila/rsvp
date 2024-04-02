import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  // eslint-disable-next-line global-require
  const router = typeof window !== 'undefined' ? require('next/router') : null;
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full p-6 sm:w-1/2">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={`${router ? router.basePath : ''}${image}`}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
