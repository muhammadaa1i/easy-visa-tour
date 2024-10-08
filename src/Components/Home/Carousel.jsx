import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel.css';
import { Pagination } from 'swiper/modules';
import c2 from '../images/c2.png'

export default function Carousel() {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className='swp1 max-w-[1920px] w-full h-[900px] border-2 border-red-800 flex justify-center items-center '>
                        <h1 class="max-w-[900px] w-full h-auto text-white bg-black uppercase bg-opacity-70 px-4 py-2 rounded-2xl text-5xl font-bold text-center font-sans ">Your comfort in travel is our concern.</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{backgroundImage:`url(${c2})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', maxWidth:'1920px', width:'100%', height:'auto' }} className='swp2 max-w-[1920px] w-full h-auto '>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swp3 max-w-[1920px] w-full h-auto '>
                        
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
