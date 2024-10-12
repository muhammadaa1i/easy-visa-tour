import r2 from "../images/r2.png"
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation();
    const languages = localStorage.getItem('i18nextLng');
    console.log(i18n, "i18nnn")
    const handleChange = (event) => {
        console.log(event.target.value)
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('i18nextLng', selectedLanguage);
    }
    return (
        <nav className="navhold w-full h-auto fixed flex items-center justify-center bg-white mt-[-5px] z-10 shadow-md left-0 p1920:w-[1920px] p1475:left-[-50px] border-2 border-red-700 ">

            <div className='navbar max-w-[1300px] w-full h-20 border-2 border-red-500 m-auto flex flex-row items-center justify-between my-2  '>

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
                    <select
                        value={languages} id='lng' onChange={handleChange}
                        className='outline-none text-white bg-black '>
                        <option value="en">EN</option>
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                    </select>
                </ul>

            </div>

            <div class="navbar-mobile shadow-md bg-white h-[60px] flex py-2 relative z-[99] p992:hidden">

                <a aria-current="page" href="/uz#" class="router-link-active router-link-exact-active">
                    <img class="w-[70px] ml-2" src={r2}></img>
                </a>

                <button class="burger-btn absolute z-[1] mt-[10px] right-[10px] md:hidden">
                    <span></span>
                    <span></span>
                    <span></span>
                    <a href class="text-black block ml-auto mt-[10px] right-[50px] z-[2] absolute" >+99899 712 66 66</a>

                    <div class="mobile-menu z-[1] fixed left-0 w-full h-[100dvb] bg-white flex flex-col items-center shadow-md p-[20px] top-0 opacity-100">

                        <div class="w-full h-full flex flex-col items-center justify-center">

                            <ul class="flex flex-col items-center justify-center mt-[50px] gap-8 text-black text-[24px] uppercase font-bold">

                                <li>
                                    <a aria-current="page" href="/uz#about" class="router-link-active router-link-exact-active">{t('About')}</a>
                                </li>

                                <li>
                                    <a aria-current="page" href="/uz#country" class="router-link-active router-link-exact-active">{t('Countries')}</a>
                                </li>

                                <li>
                                    <a aria-current="page" href="/uz#uslug" class="router-link-active router-link-exact-active">{t("Services")}</a>
                                </li>

                                <li>
                                    <a aria-current="page" href="/uz#rabota" class="router-link-active router-link-exact-active">{t('Our works')}</a>
                                </li>

                                <li>
                                    <a aria-current="page" href="/uz#contact" class="router-link-active router-link-exact-active">{t('Contact')}</a>
                                </li>

                            </ul>

                            <div class="selected__custom flex items-center mt-4">

                                <select class="outline-none bg-transparent text-black" name id>
                                    <option value="en">EN</option>
                                    <option value="ru">RU</option>
                                    <option value="uz">UZ</option>
                                </select>

                            </div>

                        </div>

                    </div>

                </button>

            </div>

        </nav>
    )
}
export default Header