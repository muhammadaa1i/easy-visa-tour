import React, { useEffect, Suspense } from 'react'
import './Home.css'
import Carousel from './Carousel'
import { useTranslation } from 'react-i18next'
import Header from './Header'
import About from './About'
import Countries from './Countries'
import Works from './Works'
import Services from './Services'
import Contact from './Contact'

const Home = () => {
    const { t, i18n } = useTranslation();
    const languages = localStorage.getItem('i18nextLng');
    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('i18nextLng', selectedLanguage);
    }

    return (
        <div className='site w-full h-auto bg-white border-4 border-fuchsia-900 m-auto flex flex-col justify-center '>
            <div className='m-auto'>
                <Header />
            </div>
            <Carousel />
            <About />
            <Countries />
            <Works />
            <Services />
            <Contact />
        </div>
    )
}

export default Home