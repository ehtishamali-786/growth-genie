import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SchedulerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: '0',
  };

  const events = [
    { date: 'January 02 - January 05, 2024', name: 'AsiaCircuits' },
    { date: 'January 03 - January 05, 2024', name: 'AsiaCircuits' },
    { date: 'January 04 - January 05, 2024', name: 'AsiaCircuits' },
    // Add more events as needed
  ];

  return (
    <div className="w-full flex justify-center items-center  ">
      <Slider {...settings} className="w-full max-w-md ">
        {events.map((event, index) => (
          <div key={index} className="text-center  ">
            <p className="text-lg font-medium">{event.date}</p>
            <p className="text-gray-500">{event.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} text-gray-500`}
      onClick={onClick}
    >
         <svg class="h-6 w-6 text-neutral-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="9 18 15 12 9 6" /></svg>
       
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} text-gray-500`}
      onClick={onClick}
    >
        <svg class="h-6 w-6 text-neutral-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
    </div>
  );
};

export default SchedulerSlider;
