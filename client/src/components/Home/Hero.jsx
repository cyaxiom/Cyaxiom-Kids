// SliderOne.js
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sample slide data
const slideData = [
  {
    title: "Quest for Knowledge",
    heading: "Join Our Unique Kid's",
    highlight: "Bootcamp",
    subheading: "Experience.",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
    seats: "56 Seats",
    image: "assets/images/main-slider/image-1.png",
    countdownDate: "2024/10/1"
  },
  {
    title: "Adventure Awaits",
    heading: "Explore Our Exciting",
    highlight: "Kids",
    subheading: "Programs.",
    text: "Discover fun and learning with our expert-led activities.",
    seats: "45 Seats",
    image: "assets/images/main-slider/image-1.png",
    countdownDate: "2024/10/1"
  },{
    title: "Adventure Awaits",
    heading: "Explore Our Exciting",
    highlight: "Kids",
    subheading: "Programs.",
    text: "Discover fun and learning with our expert-led activities.",
    seats: "45 Seats",
    image: "assets/images/main-slider/image-1.png",
    countdownDate: "2024/10/1"
  }
];

const Hero = () => {
  return (
    <section className="relative" style={{ backgroundColor: '#05073C' }}>
      {/* Down Arrow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <img src="assets/images/main-slider/down.png" alt="scroll down" />
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: '.main-slider-prev',
          nextEl: '.main-slider-next',
        }}
        pagination={{ 
          el: '.slider-one_pagination', 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet bg-gray-300 w-3 h-3 rounded-full mx-1',
          bulletActiveClass: 'bg-blue-500' // Changed to match button color
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="relative"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              {/* Decorative Icons */}
              <div 
                className="absolute top-10 left-10 w-16 h-16 bg-no-repeat bg-contain"
                style={{ backgroundImage: "url(assets/images/main-slider/icon-1.png)" }}
              ></div>

              {/* Main Container */}
              <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Content Column */}
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300">{slide.title}</p> {/* Lightened text for dark bg */}
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                      {slide.heading} <span className="text-blue-500">{slide.highlight}</span> {slide.subheading}
                    </h1>
                    <p className="text-gray-300 max-w-md text-xl">{slide.text}</p> {/* Lightened text for dark bg */}
                    <div className="flex items-center gap-6 flex-wrap">
                      <a 
                        href="/classes"
                        className="group inline-flex items-center bg-[#144DF8] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        <span className="mr-2">Book now</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </a>
                      <div className="text-gray-300"> {/* Lightened text for dark bg */}
                        Remains: <span className="font-semibold text-blue-500">{slide.seats}</span>
                      </div>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className="relative">
                    <div 
                      className="absolute -bottom-10 left-0 w-full h-32 bg-no-repeat bg-contain"
                      style={{ backgroundImage: "url(assets/images/main-slider/shadow.png)" }}
                    ></div>
                    <div 
                      className="absolute top-0 right-0 w-16 h-16 bg-no-repeat bg-contain"
                      style={{ backgroundImage: "url(assets/images/main-slider/icon-2.png)" }}
                    ></div>
                    <div 
                      className="absolute bottom-20 left-0 w-12 h-12 bg-no-repeat bg-contain"
                      style={{ backgroundImage: "url(assets/images/main-slider/icon-3.png)" }}
                    ></div>
                    <img 
                      src={slide.image} 
                      alt="Kids Bootcamp" 
                      className="relative z-10 w-full"
                    />
                    <div className="absolute bottom-0 right-0 bg-[#144DF8] text-white p-4 rounded-tl-lg">
                      <div className="flex items-center gap-2">
                        <img src="assets/images/main-slider/fire.png" alt="fire" className="w-5 h-5" />
                        <span>Early booking</span>
                      </div>
                      <div className="time-countdown" data-countdown={slide.countdownDate}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Color Decorations - Adjusted for dark background */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-900 rounded-full -z-10 opacity-30"></div>
              <div className="absolute top-20 right-0 w-24 h-24 bg-blue-800 rounded-full -z-10 opacity-30"></div>
              <div className="absolute bottom-20 left-20 w-16 h-16 bg-blue-700 rounded-full -z-10 opacity-30"></div>
              <div className="absolute bottom-0 right-20 w-20 h-20 bg-blue-600 rounded-full -z-10 opacity-30"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="slider-one-arrow hidden lg:block">
        <div className="main-slider-prev absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-2xl text-gray-300 hover:text-[#144DF8] z-10">
          ←
        </div>
        <div className="main-slider-next absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-2xl text-gray-300 hover:text-[#144DF8] z-10">
          →
        </div>
      </div>

      {/* Pagination */}
      <div className="slider-one_pagination flex justify-center mt-4 space-x-2"></div>

      {/* Waves */}
      <div className="absolute bottom-0 w-full">
        <svg 
          className="w-full h-28" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 24 150 28" 
          preserveAspectRatio="none"
        >
          <defs>
            <path 
              id="gentle-wave" 
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" 
            />
          </defs>
          <g className="parallaxx">
            <use xlinkHref="#gentle-wave" x="18" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="100" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="70" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;