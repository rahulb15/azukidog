import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div>
      <h2>Simple Slider</h2>
      <Slider {...settings}>
        <div className='bg-red-700'>
          <h3>Slide 1</h3>
        </div>
        <div className='bg-green-700'>
          <h3>Slide 2</h3>
        </div>
        <div className='bg-red-700'>
          <h3>Slide 3</h3>
        </div>
        <div className='bg-green-700'>
          <h3>Slide 4</h3>
        </div>
        <div className='bg-red-700'>
          <h3>Slide 5</h3>
        </div>
        <div className='bg-red-700'>
          <h3>Slide 1</h3>
        </div>
        <div className='bg-green-700'>
          <h3>Slide 2</h3>
        </div>
        <div className='bg-red-700'>
          <h3>Slide 3</h3>
        </div>
        <div className='bg-green-700'>
          <h3>Slide 4</h3>
        </div>
        <div className='bg-red-700'>
          <h3>Slide 5</h3>
        </div>
       
      </Slider>
    </div>
);
};

export default SimpleSlider;