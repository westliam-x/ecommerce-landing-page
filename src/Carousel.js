import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=' my-14'>
      <Slider {...settings}>
        <div >
          <div className="relative rounded-md overflow-hidden">
            <img src="images/model-1.jpg" alt="Slide 1" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
              <h3 className="text-5xl font-bold text-center text-white">Level Up your style with our branded collections</h3>
              <btn className=" bg-white p-3 px-5 m-5 rounded-md">Shop Now</btn>
            </div>
          </div>
        </div>
        <div>
          <div className="relative rounded-md overflow-hidden">
            <img src="images/model-2.jpg" alt="Slide 2" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
              <h3 className=" text-5xl font-bold text-center text-white">Level Up your style with our sleak collections</h3>
              <btn className=" bg-white p-3 px-5 m-5 rounded-md">Shop Now</btn>
            </div>
          </div>
        </div>
        <div>
          <div className="relative rounded-md overflow-hidden">
            <img src="images/model-3.jpg" alt="Slide 3" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
              <h3 className="text-5xl font-bold text-center text-white">Level Up your style with our winter collections</h3>
              <btn className=" bg-white p-3 px-5 m-5 rounded-md">Shop Now</btn>
            </div>
          </div>
        </div>
        <div>
          <div className="relative rounded-md overflow-hidden">
            <img src="images/model-4.jpg" alt="Slide 3" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
              <h3 className="text-5xl font-bold text-center text-white">Level Up your style with our Dinner collections</h3>
              <btn className=" bg-white p-3 px-5 m-5 rounded-md">Shop Now</btn>
            </div>
          </div>
        </div>
        <div>
          <div className="relative rounded-md overflow-hidden">
            <img src="images/model-5.jpg" alt="Slide 3" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
              <h3 className="text-5xl font-bold text-center text-white">Level Up your style with our Casual collections</h3>
              <btn className=" bg-white p-3 px-5 m-5 rounded-md">Shop Now</btn>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
