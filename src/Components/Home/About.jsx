import Carousel2 from './Carousel2'
import { useTranslation } from "react-i18next";
import './About.css'
import r2 from '../images/r2.png'

const About = () => {
    const { t, i18n } = useTranslation();
    const languages = localStorage.getItem('i18nextLng');

    return (
        <div id='about' className='about pt-[100px] m-auto'>

            <div className="popular max-w-[1920px] w-full h-auto border-2 border-blue-700 m-auto ">

                <div className="popular-inside max-w-[1300px] w-full h-auto border-2 border-yellow-500 m-auto flex flex-col gap-2 ">
                    <h3 className='text-[50px] font-sans text-left font-bold'>
                        {t('Populars')}
                    </h3>
                    <span class="animate-linear-1 block w-[48px] h-[5px] bg-[#f00] mr-16 "></span>
                    <div className='carousel2 border-2 border-emerald-800'>
                        <Carousel2 />
                    </div>
                </div>

            </div>

            <div className="container max-w-[1920px] w-full h-auto mt-[50px] px-[15px] border-2 border-y-red-600 ">

                <div className="conatiner-flex m-auto max-w-[1270px] w-full h-auto flex flex-row justify-between flex-wrap gap-[10px] p1320:gap-5 border-2 border-gray-900 ">

                    <div className='conatiner-left flex flex-col justify-center '>

                        <span class="block max-w-[508px] w-full h-[2px] bg-[#f00] "></span>

                        <h3 className='text-[50px] font-sans font-bold mt-[50px] '>{t('About')}</h3>

                        <span class="animate-linear-1 block w-[150px] h-[5px] bg-[#f00]"></span>

                        <h5 className='max-w-[570px] w-full text-[18px] font-medium text-black mt-[30px] font-sans '>
                          {t('EASY VISA CONSULTING is a rapidly growing company specializing in visa support for travelers. We ensure that your trips are comfortable and worry-free.')}
                            <br />
                            <br />
                          {t('EASY VISA CONSULTING provides visa services for leisure and business trips to the Schengen Area, Canada, the USA, the UK, Japan, and Korea. Our team of experienced professionals ensures a high level of service, allowing you to focus on your travel plans.')}
                            <br />
                            <br />
                           {t('We are committed to making the visa application process simple and understandable for clients from Uzbekistan, enabling them to easily and quickly access the best travel destinations in the world.')}
                        </h5>

                        <span class="block max-w-[508px] w-full h-[2px] bg-[#f00] mt-[60px] "></span>

                    </div>

                    <div className='container-img flex items-end '>
                        <img className='max-w-[250px] w-full h-auto ' src={r2} />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default About