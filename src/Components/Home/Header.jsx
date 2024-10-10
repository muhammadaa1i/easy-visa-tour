import { useEffect } from "react";
import r2 from "../images/r2.png"
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation();
    const languages = localStorage.getItem('i18nextLng');
    console.log(i18n,"1issdsd")
    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('i18nextLng', selectedLanguage);
    }
    return (
        <div className="nav-hold max-w-[1920px] w-full h-auto bg-white mt-[-5px] max-big:w-full max-big:fixed z-100 fixed  border-2 border-red-700 ">

            <div className='navbar max-w-[1300px] w-full h-20 border-2 border-red-500 m-auto flex flex-row items-center justify-between my-2 '>

                <a className='nav-href' href="">
                    <img className='nav-img w-[100px]' src={r2} />
                </a>

                <ul className="menu h-auto flex uppercase font-bold text-[14px] gap-8 ml-auto mr-[30px] font-sans ">
                    <li className='nav-link relative cursor-pointer '>
                        <a href='#about' className='router-link-active router-link-exact-active text-black hover:text-red-800 relative '>{t('about')}</a>
                    </li>
                    <li className='nav-link relative cursor-pointer  '>
                        <a href='#countries' className='router-link-active router-link-exact-active text-black hover:text-red-800 relative '>{t('countries')}</a>
                    </li>
                    <li className='nav-link relative cursor-pointer  '>
                        <a href='#works' className='router-link-active router-link-exact-active text-black hover:text-red-800 relative '>{t('our works')}</a>
                    </li>
                    <li className='nav-link relative cursor-pointer  '>
                        <a href='#services' className='router-link-active router-link-exact-active text-black hover:text-red-800 relative '>{t('services')}</a>
                    </li>
                    <li className='nav-link relative cursor-pointer  '>
                        <a href='#contact' className='router-link-active router-link-exact-active text-black hover:text-red-800 relative '>{t('contact')}</a>
                    </li>
                    <select value={languages} id='lng' onChange={handleChange} className='outline-none text-white bg-black '>
                        <option value="EN">EN</option>
                        <option value="UZ">UZ</option>
                        <option value="RU">RU</option>
                    </select>
                </ul>

            </div>

        </div>
    )
}
export default Header