import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './Carousel3.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import x1 from '../images/x1.jpg'
import x2 from '../images/x2.jpg'
import x3 from '../images/x3.jpg'
import x4 from '../images/x4.jpg'
import x5 from '../images/x5.jpg'
import x6 from '../images/x6.jpg'

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={x1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={x2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={x3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={x4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={x5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={x6} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='max-w-[305px] w-full max-h-[245px] h-full ' src={x1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-w-[305px] w-full max-h-[245px] h-full ' src={x2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-w-[305px] w-full max-h-[245px] h-full ' src={x3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-w-[305px] w-full max-h-[245px] h-full ' src={x4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-w-[305px] w-full max-h-[245px] h-full ' src={x5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-w-[305px] w-full max-h-[245px] h-full ' src={x6} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
