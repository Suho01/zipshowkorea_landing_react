import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import i18next from "i18next";
import {useTranslation} from "react-i18next";

function Nav() {
    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'kr');
    const changeLanguage = (lang) => {
        i18next.changeLanguage(lang);
        setSelectedLanguage(lang);
        localStorage.setItem('selectedLanguage', lang);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage) {
            i18next.changeLanguage(savedLanguage);
            setSelectedLanguage(savedLanguage);
        }
    }, []);

    const [isNavVisible, setIsNavVisible] = useState(false);
    const location = useLocation();
    const path = ["About", "Service", "Projects", "Contact"];

    const handleHamburgerClick = () => {
        setIsNavVisible(true);
    };
    const handleCloseClick = () => {
        setIsNavVisible(false);
    };

    const handleClick = () => {
        window.location.href = '/inquiry';
    };

    const snsLink = [
        {
            name: "instargram",
            link: "https://www.instagram.com/zipshowkorea/"
        },
        {
            name: "blog",
            link: "https://blog.naver.com/zipshowkorea"
        },
        {
            name: "youtube",
            link: "https://www.youtube.com/channel/UC3zJz6XURcSkkqMBMpEUiKA"
        },
    ];

    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <>
            <div className="lg:flex hidden w-full h-20 justify-between items-center px-[60px] fixed bg-nav-gradient z-50 bg-gradient-black-transparent">
                <div className="cursor-pointer">
                    <Link to="/" className="text-center">
                        <img src="/images/common/logo.svg" alt="logo" className="w-[140px]"/>
                    </Link>
                </div>
                <ul className="flex justify-between items-center gap-x-14 text-center text-white text-lg navMenuList">
                    <li className={`cursor-pointer ${location.pathname === '/about' ? 'text-[#E0474B] font-bold' : ''}`}>
                        <Link to="/about">
                            <span
                                className={`${location.pathname === '/about' ? 'bg-[#E0474B] w-[6px] h-[6px] rounded-full inline-block mb-1' : ''}`}></span>&#160; About
                        </Link>
                    </li>
                    {/*<li
                        className={`cursor-pointer relative py-3 ${
                            ['/service', '/digital', '/arvr', '/3dscan', '/webapp', '/videoprod'].includes(location.pathname)
                                ? 'text-[#E0474B] font-bold'
                                : ''
                        }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Link to="/service">
                            <span
                                className={
                                `${['/service', '/digital', '/arvr', '/3dscan', '/webapp', '/videoprod'].includes(location.pathname)
                                    ? 'bg-[#E0474B] w-[6px] h-[6px] rounded-full inline-block mb-1'
                                    : ''
                                }`}></span>&#160; Service
                        </Link>
                        {
                            isHovered && (
                                <div
                                    className="absolute top-12 left-1/2 -translate-x-1/2 bg-black text-white w-40 text-base py-2 flex flex-col font-normal">
                                    <Link to="/digital" className="px-4 py-1 hover:text-[#E0474B]">{t('about_serviceArray_title1')}</Link>
                                    <Link to="/arvr" className="px-4 py-1 hover:text-[#E0474B]">AR/VR</Link>
                                    <Link to="/3dscan" className="px-4 py-1 hover:text-[#E0474B]">{t('about_serviceArray_title3')}</Link>
                                    <Link to="/webapp" className="px-4 py-1 hover:text-[#E0474B]">{t('about_serviceArray_title4')}</Link>
                                    <Link to="/videoprod" className="px-4 py-1 hover:text-[#E0474B]">{t('about_serviceArray_title5')}</Link>
                                </div>
                            )
                        }
                    </li>*/}
                    <li className={`cursor-pointer ${location.pathname === '/projects' ? 'text-[#E0474B] font-bold' : ''}`}>
                        <Link to="/projects">
                            <span
                                className={`${location.pathname === '/projects' ? 'bg-[#E0474B] w-[6px] h-[6px] rounded-full inline-block mb-1' : ''}`}></span>&#160; Projects
                        </Link>
                    </li>
                    <li className={`cursor-pointer ${location.pathname === '/contact' ? 'text-[#E0474B] font-bold' : ''}`}>
                        <Link to="/contact">
                            <span
                                className={`${location.pathname === '/contact' ? 'bg-[#E0474B] w-[6px] h-[6px] rounded-full inline-block mb-1' : ''}`}></span>&#160; Contact
                        </Link>
                    </li>
                    {/*{
                        path.map((e, i) => {
                            const isActive = location.pathname === `/${e}` || (e === "Projects" && location.pathname.startsWith("/projects"));

                            return (
                                <li key={i} className={`cursor-pointer ${isActive ? 'text-[#E0474B] font-bold' : ''}`}>
                                    <Link to={`/${e}`}>
                                        <span className={`${isActive ? 'bg-[#E0474B] w-[6px] h-[6px] rounded-full inline-block mb-1' : ''}`}></span>
                                        &#160; {e}
                                    </Link>

                                </li>
                            )
                        })
                    }*/}
                    <li className="cursor-pointer border border-white box-border text-sm rounded-full"
                        key={location.key}>
                        <Link to="/inquiry" className="px-5 py-[10px] block" onClick={handleClick}>
                            {/*프로젝트 문의*/}
                            {t('nav_project_inquiry')}
                        </Link>
                    </li>
                    <li className="flex gap-x-6 relative after:absolute after:w-[1px] after:h-[10px] after:bg-[#999] after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2">
                        <p className={`cursor-pointer ${selectedLanguage === 'kr' ? 'text-white font-bold' : 'text-[#999]'}`}
                           onClick={() => changeLanguage('kr')}>KR</p>
                        <p className={`cursor-pointer ${selectedLanguage === 'en' ? 'text-white font-bold' : 'text-[#999]'}`}
                           onClick={() => changeLanguage('en')}>EN</p>
                    </li>
                </ul>
            </div>
            <ul className="lg:hidden flex w-full h-[60px] justify-between items-center px-5 fixed bg-nav-gradient z-50 bg-gradient-black-transparent">
                <li>
                    <Link to="/" className="lg:hidden block cursor-pointer">
                        <img src="/images/common/logo.svg" alt="logo" className="w-[113px]"/>
                    </Link>
                </li>
                <li className="flex items-center gap-x-3 z-50">
                    <div
                        className="flex gap-x-6 relative after:absolute after:w-[1px] after:h-[10px] after:bg-[#999] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2">
                        <p className={`cursor-pointer ${selectedLanguage === 'kr' ? 'text-white font-bold' : 'text-[#999]'}`} onClick={() => changeLanguage('kr')}>KR</p>
                        <p className={`cursor-pointer ${selectedLanguage === 'en' ? 'text-white font-bold' : 'text-[#999]'}`} onClick={() => changeLanguage('en')}>EN</p>
                    </div>
                    <div className="cursor-pointer" onClick={handleHamburgerClick}>
                        <img src="/images/common/menu.svg" alt="menu"/>
                    </div>
                </li>
            </ul>
            {isNavVisible && (
                <div className="w-full h-full fixed z-50 bg-black pt-[84px] pl-8">
                    <div className="absolute top-5 right-5 cursor-pointer" onClick={handleCloseClick}>
                        <img src="/images/common/close.svg" alt="close"/>
                    </div>
                    <div className="">
                        <ul className="text-white text-[1.75em] font-bold">
                            <li className={`mb-8 cursor-pointer ${location.pathname === '/about' ? 'text-[#E0474B]' : ''}`}>
                                <Link to="/about">
                                    About &#160;
                                    <span
                                        className={`${location.pathname === '/about' ? 'bg-[#E0474B] w-2 h-2 rounded-full inline-block mb-1.5' : ''}`}></span>
                                </Link>
                            </li>
                            {/*<li
                                className={`mb-8 cursor-pointer relative 
                                ${['/service', '/digital', '/arvr', '/3dscan', '/webapp', '/videoprod'].includes(location.pathname)
                                    ? 'text-[#E0474B]' 
                                    : ''}`}
                            >
                                <div onClick={toggleMenu} className="flex items-center">
                                    <Link to="">
                                        Service &#160;
                                        <span
                                            className={`
                                            ${['/service', '/digital', '/arvr', '/3dscan', '/webapp', '/videoprod'].includes(location.pathname) ? 'bg-[#E0474B] w-2 h-2 rounded-full inline-block mb-1.5'
                                                : ''}`}
                                        ></span>
                                    </Link>
                                </div>

                                {
                                    isOpen && (
                                        <div
                                            className="absolute top-12 left-0 bg-black text-white w-40 text-base py-2 font-normal flex flex-col">
                                            <Link to="/digital" className="px-4 py-1 hover:text-[#E0474B]">{t('about_serviceArray_title1')}</Link>
                                            <Link to="/arvr" className="px-4 py-1 hover:text-[#E0474B]">AR/VR</Link>
                                            <Link to="/3dscan" className="px-4 py-1 hover:text-[#E0474B]">{t('about_serviceArray_title3')}</Link>
                                            <Link to="/webapp" className="px-4 py-1 hover:text-[#E0474B]">{t('about_serviceArray_title4')}</Link>
                                            <Link to="/videoprod" className="px-4 py-1 hover:text-[#E0474B]">{t('about_serviceArray_title5')}</Link>
                                        </div>
                                    )
                                }
                            </li>*/}
                            <li className={`mb-8 cursor-pointer ${location.pathname === '/projects' ? 'text-[#E0474B]' : ''}`}>
                                <Link to="/projects">
                                    Projects &#160;
                                    <span
                                        className={`${location.pathname === '/projects' ? 'bg-[#E0474B] w-2 h-2 rounded-full inline-block mb-1.5' : ''}`}></span>
                                </Link>
                            </li>
                            <li className={`mb-8 cursor-pointer ${location.pathname === '/contact' ? 'text-[#E0474B]' : ''}`}>
                                <Link to="/contact">
                                    Contact &#160;
                                    <span
                                        className={`${location.pathname === '/contact' ? 'bg-[#E0474B] w-2 h-2 rounded-full inline-block mb-1.5' : ''}`}></span>
                                </Link>
                            </li>
                            {/*{
                                path.map((e, i) => {
                                    const isActive = location.pathname === `/${e}` || (e === "Projects" && location.pathname.startsWith("/projects"));

                                    return (
                                        <li key={i}
                                            className={`mb-8 cursor-pointer ${isActive ? 'text-[#E0474B]' : ''}`}>
                                            <Link to={`/${e}`}>
                                                {e} &#160;
                                                <span
                                                    className={`${isActive ? 'bg-[#E0474B] w-2 h-2 rounded-full inline-block mb-1.5' : ''}`}></span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }*/}
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#ccc] font-bold">
                            <li className="mb-1 text-[#666]">E-Mail</li>
                            <li className="mb-4">zipshowkorea@gmail.com</li>
                            <li className="mb-1 text-[#666]">Tel</li>
                            <li className="mb-4">+82 70-5180-0011</li>
                            <li className="mb-1 text-[#666]">Fax</li>
                            <li className="mb-4">050-4399-1226</li>
                        </ul>
                        <div className="mt-10 flex gap-3">
                            {
                                snsLink.map((e, i) => {
                                    return (
                                        <Link to={e.link} target="_blank">
                                            <img src={`/images/common/icon_${e.name}.svg`} alt={e.name}/>
                                        </Link>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

Nav.propTypes = {};

export default Nav;