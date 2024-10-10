import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel.css';
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export default function Carousel() {
    const { t, i18n } = useTranslation();
    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage)
    }


    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className='swp1 max-w-[1920px] w-full min-h-[1000px] h-full border-2 border-red-800 flex justify-center items-center m-auto p-0 max-middle:max-w-[1150px] max-middle: ' >
                        <h1 class="max-w-[900px] w-full h-auto text-white bg-black uppercase bg-opacity-70 px-4 py-2 rounded-2xl text-5xl font-bold text-center font-sans ">{t('Your comfort in travel is our concern.')}</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swp2 max-w-[1920px] w-full min-h-[1000px] h-full border-2 border-red-800 flex justify-center items-center m-auto '>
                        <h1 class="max-w-[900px] w-full h-auto text-white bg-black uppercase bg-opacity-70 px-4 py-2 rounded-2xl text-5xl font-bold text-center font-sans ">{t('Reliable visa processing for all countries.')}</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='swp3 max-w-[1920px] w-full min-h-[1000px] h-full border-2 border-red-800 flex justify-center items-center m-auto '>
                        <h1 class="max-w-[900px] w-full h-auto text-white bg-black uppercase bg-opacity-70 px-4 py-2 rounded-2xl text-5xl font-bold text-center font-sans ">{t('The best tourist routes at affordable prices.')}</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
