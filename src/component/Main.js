import React, {useEffect, useRef, useState} from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {ScrollAnimation} from "@lasbe/react-scroll-animation";
import {useTranslation} from "react-i18next";

function Main() {
    const { t } = useTranslation();

    const serviceArray = [
        {
            title: t('main_serviceArray_title1'), // "디지털 미디어아트"
            desc1: "Digital",
            desc2: "Media Art",
            image: "/images/main/service_digitalMediaArt.png"
        },
        {
            title: "AR/VR",
            desc1: "AR/VR",
            desc2: "Contents",
            image: "/images/main/service_ARVR.png"
        },
        {
            title: t('main_serviceArray_title3'), // "3D 스캔"
            desc1: "3D",
            desc2: "Scan",
            image: "/images/main/service_3dScan.png"
        },
        {
            title: t('main_serviceArray_title4'), // "웹&앱 개발",
            desc1: "Web & App",
            desc2: "Development",
            image: "/images/main/service_WebApp.png"
        },
        {
            title: t('main_serviceArray_title5'), // "영상 제작",
            desc1: "Video",
            desc2: "Production",
            image: "/images/main/service_videoProduction.png"
        }
    ];
    const [activeImage, setActiveImage] = useState(0);

    const menuList = ["전체", "디지털 미디어아트", "AR/VR", "3D 스캔", "웹&앱 개발", "영상 제작"];
    const projectsArray = [
        { category: "디지털 미디어아트", detail: "함안박물관 애니메이션 '아라가야의 정수'", img: "/images/main/projects_1.png" },
        { category: "디지털 미디어아트", detail: "박수근미술관 인터랙티브 미디어아트 '4계'", img: "/images/main/projects_3.png" },
        { category: "AR/VR", detail: "박수근미술관 미디어아트 '빨래터'", img: "/images/main/projects_17.png" },
        { category: "AR/VR", detail: "국립세계문자박물관 AI 인터랙티브 미디어아트 '문자로 그리는 미래'", img: "/images/main/projects_7.png" },
        { category: "3D 스캔", detail: "함안박물관 애니메이션 '아라가야의 정수'", img: "/images/main/projects_4.png" },
        { category: "3D 스캔", detail: "함안박물관 애니메이션 '아라가야의 정수'", img: "/images/main/projects_6.png" },
        { category: "웹&앱 개발", detail: "함안박물관 애니메이션 '아라가야의 정수'", img: "/images/main/projects_8.png" },
        { category: "웹&앱 개발", detail: "함안박물관 애니메이션 '아라가야의 정수'", img: "/images/main/projects_1.png" },
        { category: "영상 제작", detail: "함안박물관 애니메이션 '아라가야의 정수'", img: "/images/main/projects_21.png" },
        { category: "영상 제작", detail: "함안박물관 애니메이션 '아라가야의 정수'", img: "/images/main/projects_15.png" },
    ];

    const [active, setActive] = useState('전체');
    const filteredProjects = active === '전체' ? projectsArray : projectsArray.filter(project => project.category === active);
    const clickActive = (category) => {
        setActive(category);
    }

    const outerDivRef = useRef(null);
    const linear = (t) => t;

    const scrollTo = (top, duration) => {
        const start = Math.ceil(outerDivRef.current.scrollTop);
        const change = top - start;
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            outerDivRef.current.scrollTop = start + change * linear(progress);

            if (timeElapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    }

    const wheelHandler = (e) => {
        const { deltaY } = e;
        const { scrollTop, clientHeight } = outerDivRef.current;
        const pageHeight = clientHeight;
        const maxPage = 3; // 페이지 수를 section3까지만 카운트
        const scrollDuration = 500; // 스크롤 속도 조절

        let nextPage;

        if (scrollTop < maxPage * pageHeight) {
            // e.preventDefault();
            if (deltaY > 0) {
                // 아래로 스크롤
                nextPage = Math.ceil(scrollTop / pageHeight) + 1;
                if (nextPage <= maxPage) {
                    scrollTo(nextPage * pageHeight, scrollDuration);
                }
            } else {
                // 위로 스크롤
                nextPage = Math.ceil(scrollTop / pageHeight) - 1;
                if (nextPage >= 0) {
                    scrollTo(nextPage * pageHeight, scrollDuration);
                }
            }
        }
    }

    useEffect(() => {
        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener('wheel', wheelHandler);
        return () => {
            outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
        }
    }, []);

    return (
        <div ref={outerDivRef} className="relative bg-[#111] h-dvh overflow-y-auto">
            <Nav/>

            <div id="section1" className="lg:h-dvh relative">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/images/main/zipshowkorea_hp_video.mp4"
                    className="w-full object-cover object-left lg:h-auto"/>
            </div>

            <div className="relative lg:h-dvh bg-[#111] pt-[184px] lg:flex items-center" id="section2">
                <div className="mx-auto w-3/4 h-auto relative">
                    <img src="/images/main/banner.png" alt="banner"/>
                    <div className="absolute bg-main-gradient top-0 left-0 h-full w-[124px] lg:w-[300px]"></div>
                    <ScrollAnimation
                        startingPoint="bottom"
                        duration={2}
                        amount="xl"
                        delay={0.5}
                        repeat
                    >
                        <p className="absolute -top-16 left-0 text-white font-bold text-[1.75em] lg:top-[-124px] lg:left-[-0px] lg:text-[3.5em]">
                            {/*가상이 일상이 되는 <br/> 공간을 만듭니다*/}
                            {t('main_banner_title').split('\n').map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </p>
                    </ScrollAnimation>
                </div>
            </div>

            <div className="relative pt-[120px] lg:flex flex-col items-center lg:h-dvh bg-[#111]" id="section3">
                <div className="mx-auto text-center mb-5 lg:mb-[60px]">
                    <p className="font-bold text-white mb-5 text-xl lg:text-[2.5em]">Our Service</p>
                    <span className="text-[#ccc] text-lg hidden lg:block">
                        {/*미디어아트, 3D 스캐닝, 증강현실 어플리케이션, 웹 플랫폼 개발, 애니메이션, 디지털 줌 전망경 서비스를 제공합니다.*/}
                        {t('main_ourService_desc')}
                    </span>
                </div>

                {/* pc ver. our Service */}
                <div className="relative hidden lg:block">
                    <img src={serviceArray[activeImage].image} alt="service"
                         className="w-full h-auto aspect-[1920/712] object-cover"/>
                    <div
                        className="absolute bg-black opacity-40 top-0 left-0 z-10 w-full h-auto aspect-[1920/712]"></div>
                    <div className="absolute top-0 left-0 z-20 w-full h-auto aspect-[1920/712]">
                        <Link to="/about#about_our_service">
                            <ul className="flex justify-between items-center text-center h-full">
                                {
                                    serviceArray.map((e, i) => {
                                        return (
                                            <li
                                                key={i}
                                                className="basis-1/5 h-full flex flex-col justify-center items-center hover:bg-black/50 cursor-pointer group transition-all ease-in-out"
                                                onMouseEnter={() => setActiveImage(i)}
                                            >
                                                <p className="font-bold text-sm text-[#e0474b] lg:text-lg lg:pb-5">{e.title}</p>
                                                <span
                                                    className="text-lg text-white lg:text-[2em] lg:leading-10">{e.desc1}
                                                    <br/> {e.desc2}</span>
                                                <button
                                                    className="hidden group-hover:flex text-[#ccc] justify-between items-center gap-x-3 rounded-full border border-[#666] px-6 py-[10px] cursor-pointer mt-[70px]">
                                                    <p className="text-xs lg:text-base">
                                                        {/*자세히 보기*/}
                                                        {t('main_ourService_detailBtn')}
                                                    </p>
                                                    <img src="/images/main/arrow.svg" alt="arrow"/>
                                                </button>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </Link>

                    </div>
                </div>

                {/* mobile ver. our Service*/}
                <Link to="/about" className="lg:hidden">
                    <Swiper
                        className="relative w-full h-auto"
                        slidesPerView={1.2}
                        centeredSlides={true}
                        spaceBetween={16}
                    >
                        {
                            serviceArray.map((e, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <img src={e.image} alt={e.image}
                                             className="w-full h-auto aspect-[300/200] object-cover"/>
                                        <div
                                            className="text-center absolute top-0 left-0 bg-black/50 w-full h-full flex flex-col justify-center gap-y-3">
                                            <h3 className="font-bold text-sm text-[#e0474b]">{e.title}</h3>
                                            <p className="text-lg text-white">{e.desc1} <br/> {e.desc2}</p>
                                            <button
                                                className="flex items-center gap-x-[10px] px-4 py-2 border border-[#666] rounded-full mx-auto">
                                                <p className="font-bold text-xs text-[#ccc]">
                                                    {/*자세히 보기*/}
                                                    {t('main_ourService_detailBtn')}
                                                </p>
                                                <img src="/images/main/arrow.svg" alt="arrow"/>
                                            </button>
                                        </div>
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </Link>
            </div>

            <div className="relative py-[120px] lg:pb-60 lg:px-60 bg-[#111]" id="section4">
                <h3 className="font-bold text-white text-xl lg:text-[2.5em] text-center lg:pb-0 pb-5">Projects</h3>

                {/* pc ver. Projects */}
                {/*<div className="lg:flex flex-wrap justify-between items-center text-[#ccc] hidden gap-y-8">
                    <ul className="flex flex-wrap items-center text-center text-lg gap-x-8 pt-10">
                        {
                            menuList.map((e, i) => {
                                return (
                                    <li key={i} onClick={() => clickActive(e)}
                                        className={`cursor-pointer ${active === e ? 'activeList' : ''} last:after:w-full`}>{e}</li>
                                );
                            })
                        }
                    </ul>
                    <Link to="/projects"
                          className="flex justify-between items-center gap-x-3 rounded-full border border-[#666] px-6 py-[10px] cursor-pointer">
                        <p>모든 프로젝트</p>
                        <img src="/images/main/arrow.svg" alt="arrow"/>
                    </Link>
                </div>*/}

                {/* mobile ver. Projects */}
                {/*<div className="lg:hidden px-5 py-5 overflow-x-auto touch-pan-x scrollbar-hidden relative">
                    <ul className="flex gap-x-5 whitespace-nowrap">
                        {
                            menuList.map((e, i) => {
                                return (
                                    <li key={i} onClick={() => clickActive(e)}
                                        className={`cursor-pointer text-[#ccc] ${active === e ? 'activeList' : ''} last:pr-5`}>{e}</li>
                                );
                            })
                        }
                    </ul>
                </div>*/}

                <div className="w-full flex flex-wrap gap-1 lg:pt-10 relative">
                    <div className="lg:hidden absolute bg-projects-list-bg right-0 -top-12 w-5 h-9 z-10"></div>
                    {/*<div
                        className="lg:hidden absolute bg-projects-list-bg left-0 -top-12 w-5 h-9 z-10 rotate-180"></div>*/}
                    <Link to="projects_detail1" className="w-full relative cursor-pointer lg:w-[calc(50%-0.25rem)]
                                    after:absolute after:z-[2] after:bg-black/70 after:w-full after:h-full after:left-0 after:top-0 after:hidden hover:after:block group">
                        <img src="/images/main/projects_1.png" alt="아라가야의 정수"/>
                        <p className="text-white font-bold absolute bottom-5 left-5 z-[1] lg:text-xl lg:px-[22px] lg:pt-[34px]">
                            {/*함안박물관 애니메이션 &#39;아라가야의 정수&#39;*/}
                            {t('main_projects_title1')}
                        </p>
                        <div className="w-full h-20 bg-projects-p-gradient absolute bottom-0 left-0"></div>
                        <div className="w-[100px] h-[100px] border-2 border-[#e0474b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full font-bold text-sm text-[#e0474b] text-center flex-col justify-center items-center gap-y-[10px] hidden group-hover:flex">
                            <img src="/images/main/plus.svg" alt="plus" className="w-4"/>
                            <p>{/*자세히 보기*/}{t('main_ourService_detailBtn')}</p>
                        </div>
                    </Link>
                    <Link to="projects_detail3" className="w-full relative cursor-pointer lg:w-[calc(50%-0.25rem)]
                                    after:absolute after:z-[2] after:bg-black/70 after:w-full after:h-full after:left-0 after:top-0 after:hidden hover:after:block group">
                        <img src="/images/main/projects_3.png" alt="4계"/>
                        <p className="text-white font-bold absolute bottom-5 left-5 z-[1] lg:text-xl lg:px-[22px] lg:pt-[34px]">
                            {/*박수근미술관 인터랙티브 미디어아트 &#39;4계&#39;*/}
                            {t('main_projects_title2')}
                        </p>
                        <div className="w-full h-20 bg-projects-p-gradient absolute bottom-0 left-0"></div>
                        <div className="w-[100px] h-[100px] border-2 border-[#e0474b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full font-bold text-sm text-[#e0474b] text-center flex-col justify-center items-center gap-y-[10px] hidden group-hover:flex">
                            <img src="/images/main/plus.svg" alt="plus" className="w-4"/>
                            <p>{/*자세히 보기*/}{t('main_ourService_detailBtn')}</p>
                        </div>
                    </Link>
                    <Link to="projects_detail17" className="w-full relative cursor-pointer lg:w-[calc(50%-0.25rem)]
                                    after:absolute after:z-[2] after:bg-black/70 after:w-full after:h-full after:left-0 after:top-0 after:hidden hover:after:block group">
                        <img src="/images/main/projects_17.png" alt="빨래터"/>
                        <p className="text-white font-bold absolute bottom-5 left-5 z-[1] lg:text-xl lg:px-[22px] lg:pt-[34px]">
                            {/*박수근미술관 미디어아트 &#39;빨래터&#39;*/}
                            {t('main_projects_title3')}
                        </p>
                        <div className="w-full h-20 bg-projects-p-gradient absolute bottom-0 left-0"></div>
                        <div
                            className="w-[100px] h-[100px] border-2 border-[#e0474b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full font-bold text-sm text-[#e0474b] text-center flex-col justify-center items-center gap-y-[10px] hidden group-hover:flex">
                            <img src="/images/main/plus.svg" alt="plus" className="w-4"/>
                            <p>{/*자세히 보기*/}{t('main_ourService_detailBtn')}</p>
                        </div>
                    </Link>
                    <Link to="projects_detail7" className="w-full relative cursor-pointer lg:w-[calc(50%-0.25rem)]
                                    after:absolute after:z-[2] after:bg-black/70 after:w-full after:h-full after:left-0 after:top-0 after:hidden hover:after:block group">
                        <img src="/images/main/projects_7.png" alt="문자로 그리는 미래"/>
                        <p className="text-white font-bold absolute bottom-5 left-5 z-[1] lg:text-xl lg:px-[22px] lg:pt-[34px]">
                            {/*국립세계문자박물관 AI 인터랙티브 미디어아트 &#39;문자로 그리는 미래&#39;*/}
                            {t('main_projects_title4')}
                        </p>
                        <div className="w-full h-20 bg-projects-p-gradient absolute bottom-0 left-0"></div>
                        <div
                            className="w-[100px] h-[100px] border-2 border-[#e0474b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full font-bold text-sm text-[#e0474b] text-center flex-col justify-center items-center gap-y-[10px] hidden group-hover:flex">
                            <img src="/images/main/plus.svg" alt="plus" className="w-4"/>
                            <p>{/*자세히 보기*/}{t('main_ourService_detailBtn')}</p>
                        </div>
                    </Link>
                    <Link to="projects_detail4" className="w-full relative cursor-pointer lg:w-[calc(50%-0.25rem)]
                                    after:absolute after:z-[2] after:bg-black/70 after:w-full after:h-full after:left-0 after:top-0 after:hidden hover:after:block group">
                        <img src="/images/main/projects_4.png" alt="아라가야의 정수"/>
                        <p className="text-white font-bold absolute bottom-5 left-5 z-[1] lg:text-xl lg:px-[22px] lg:pt-[34px]">
                            {/*함안박물관 애니메이션 &#39;아라가야의 정수&#39;*/}
                            {t('main_projects_title5')}
                        </p>
                        <div className="w-full h-20 bg-projects-p-gradient absolute bottom-0 left-0"></div>
                        <div
                            className="w-[100px] h-[100px] border-2 border-[#e0474b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full font-bold text-sm text-[#e0474b] text-center flex-col justify-center items-center gap-y-[10px] hidden group-hover:flex">
                            <img src="/images/main/plus.svg" alt="plus" className="w-4"/>
                            <p>{/*자세히 보기*/}{t('main_ourService_detailBtn')}</p>
                        </div>
                    </Link>
                    <Link to="projects_detail6" className="w-full relative cursor-pointer lg:w-[calc(50%-0.25rem)]
                                    after:absolute after:z-[2] after:bg-black/70 after:w-full after:h-full after:left-0 after:top-0 after:hidden hover:after:block group">
                        <img src="/images/main/projects_6.png" alt="아라가야의 정수"/>
                        <p className="text-white font-bold absolute bottom-5 left-5 z-[1] lg:text-xl lg:px-[22px] lg:pt-[34px]">
                            {/*함안박물관 애니메이션 &#39;아라가야의 정수&#39;*/}
                            {t('main_projects_title6')}
                        </p>
                        <div className="w-full h-20 bg-projects-p-gradient absolute bottom-0 left-0"></div>
                        <div
                            className="w-[100px] h-[100px] border-2 border-[#e0474b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full font-bold text-sm text-[#e0474b] text-center flex-col justify-center items-center gap-y-[10px] hidden group-hover:flex">
                            <img src="/images/main/plus.svg" alt="plus" className="w-4"/>
                            <p>{/*자세히 보기*/}{t('main_ourService_detailBtn')}</p>
                        </div>
                    </Link>
                    <Link to="projects_detail8" className="w-full relative cursor-pointer lg:w-[calc(50%-0.25rem)]
                                    after:absolute after:z-[2] after:bg-black/70 after:w-full after:h-full after:left-0 after:top-0 after:hidden hover:after:block group">
                        <img src="/images/main/projects_8.png" alt="아라가야의 정수"/>
                        <p className="text-white font-bold absolute bottom-5 left-5 z-[1] lg:text-xl lg:px-[22px] lg:pt-[34px]">
                            {/*함안박물관 애니메이션 &#39;아라가야의 정수&#39;*/}
                            {t('main_projects_title7')}
                        </p>
                        <div className="w-full h-20 bg-projects-p-gradient absolute bottom-0 left-0"></div>
                        <div
                            className="w-[100px] h-[100px] border-2 border-[#e0474b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full font-bold text-sm text-[#e0474b] text-center flex-col justify-center items-center gap-y-[10px] hidden group-hover:flex">
                            <img src="/images/main/plus.svg" alt="plus" className="w-4"/>
                            <p>{/*자세히 보기*/}{t('main_ourService_detailBtn')}</p>
                        </div>
                    </Link>
                    <Link to="projects_detail1" className="w-full relative cursor-pointer lg:w-[calc(50%-0.25rem)]
                                    after:absolute after:z-[2] after:bg-black/70 after:w-full after:h-full after:left-0 after:top-0 after:hidden hover:after:block group">
                        <img src="/images/main/projects_1.png" alt="아라가야의 정수"/>
                        <p className="text-white font-bold absolute bottom-5 left-5 z-[1] lg:text-xl lg:px-[22px] lg:pt-[34px]">
                            {/*함안박물관 애니메이션 &#39;아라가야의 정수&#39;*/}
                            {t('main_projects_title8')}
                        </p>
                        <div className="w-full h-20 bg-projects-p-gradient absolute bottom-0 left-0"></div>
                        <div
                            className="w-[100px] h-[100px] border-2 border-[#e0474b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full font-bold text-sm text-[#e0474b] text-center flex-col justify-center items-center gap-y-[10px] hidden group-hover:flex">
                            <img src="/images/main/plus.svg" alt="plus" className="w-4"/>
                            <p>{/*자세히 보기*/}{t('main_ourService_detailBtn')}</p>
                        </div>
                    </Link>
                    <Link to="projects_detail21" className="w-full relative cursor-pointer lg:w-[calc(50%-0.25rem)]
                                    after:absolute after:z-[2] after:bg-black/70 after:w-full after:h-full after:left-0 after:top-0 after:hidden hover:after:block group">
                        <img src="/images/main/projects_21.png" alt="아라가야의 정수"/>
                        <p className="text-white font-bold absolute bottom-5 left-5 z-[1] lg:text-xl lg:px-[22px] lg:pt-[34px]">
                            {/*함안박물관 애니메이션 &#39;아라가야의 정수&#39;*/}
                            {t('main_projects_title9')}
                        </p>
                        <div className="w-full h-20 bg-projects-p-gradient absolute bottom-0 left-0"></div>
                        <div
                            className="w-[100px] h-[100px] border-2 border-[#e0474b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full font-bold text-sm text-[#e0474b] text-center flex-col justify-center items-center gap-y-[10px] hidden group-hover:flex">
                            <img src="/images/main/plus.svg" alt="plus" className="w-4"/>
                            <p>{/*자세히 보기*/}{t('main_ourService_detailBtn')}</p>
                        </div>
                    </Link>
                    <Link to="projects_detail15" className="w-full relative cursor-pointer lg:w-[calc(50%-0.25rem)]
                                    after:absolute after:z-[2] after:bg-black/70 after:w-full after:h-full after:left-0 after:top-0 after:hidden hover:after:block group">
                        <img src="/images/main/projects_15.png" alt="아라가야의 정수"/>
                        <p className="text-white font-bold absolute bottom-5 left-5 z-[1] lg:text-xl lg:px-[22px] lg:pt-[34px]">
                            {/*함안박물관 애니메이션 &#39;아라가야의 정수&#39;*/}
                            {t('main_projects_title10')}
                        </p>
                        <div className="w-full h-20 bg-projects-p-gradient absolute bottom-0 left-0"></div>
                        <div
                            className="w-[100px] h-[100px] border-2 border-[#e0474b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full font-bold text-sm text-[#e0474b] text-center flex-col justify-center items-center gap-y-[10px] hidden group-hover:flex">
                            <img src="/images/main/plus.svg" alt="plus" className="w-4"/>
                            <p>{/*자세히 보기*/}{t('main_ourService_detailBtn')}</p>
                        </div>
                    </Link>
                    {/*{
                        filteredProjects.map((project, i) => {
                            return (
                                <Link to="projects_detail1" key={i} className="w-full relative cursor-pointer lg:w-[calc(50%-0.25rem)]
                                    after:absolute after:z-[2] after:bg-black/70 after:w-full after:h-full after:left-0 after:top-0 after:hidden hover:after:block group">
                                    <img src={project.img} alt={`projects_${i + 1}`}/>
                                    <p className="text-white font-bold absolute bottom-5 left-5 z-[1] lg:text-xl lg:px-[22px] lg:pt-[34px]">{project.detail}</p>
                                    <div className="w-full h-20 bg-projects-p-gradient absolute bottom-0 left-0"></div>
                                    <div className="w-[100px] h-[100px] border-2 border-[#e0474b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full font-bold text-sm text-[#e0474b] text-center flex-col justify-center items-center gap-y-[10px] hidden group-hover:flex">
                                        <img src="/images/main/plus.svg" alt="plus" className="w-4"/>
                                        <p>자세히 보기</p>
                                    </div>
                                </Link>
                            );
                        })
                    }*/}
                </div>
                <div className="pt-8">
                    <Link to="/projects"
                          className="w-36 lg:w-56 flex items-center justify-center gap-x-[10px] px-4 py-2 lg:px-8 lg:py-4 border border-[#666] rounded-full mx-auto ">
                        <p className="font-bold text-xs lg:text-lg text-[#ccc]">
                            {/*모든 프로젝트*/}
                            {t('main_ourService_detailBtn')}
                        </p>
                        <img src="/images/main/arrow.svg" alt="arrow"/>
                    </Link>
                </div>
            </div>

            <div
                id="section5"
                className="py-10 relative w-full bg-[#1D1D1D] bg-inquiry-bg bg-no-repeat bg-right-bottom bg-[length:244px_auto] flex flex-col justify-center
                    lg:px-60 lg:py-36 lg:bg-[length:auto]">
                <ScrollAnimation
                    startingPoint="top"
                    duration={1}
                    amount="xl"
                    delay={0.5}
                    repeat
                >
                    <p className="text-[#e0474b] font-bold text-sm text-center lg:text-lg lg:text-left">Inquiry</p>
                </ScrollAnimation>
                <ScrollAnimation
                    startingPoint="top"
                    duration={1}
                    amount="xl"
                    delay={0.5}
                    repeat
                >
                    <p className="text-white text-lg text-center pt-3 pb-8 lg:text-[2.5em] lg:pt-5 lg:pb-[60px] lg:leading-[60px] lg:text-left">
                        {/*궁금하신 사항이나 <br/> 제작하고 싶은 프로젝트가 있으신가요?*/}
                        {t('main_inquiry_title').split('\n').map((line, index) => (
                            <span key={index}>
                                    {line}
                                <br />
                                </span>
                        ))}
                    </p>
                </ScrollAnimation>
                <ScrollAnimation
                    startingPoint="top"
                    duration={1}
                    amount="xl"
                    delay={0.5}
                    repeat
                >
                    <Link
                        to="/inquiry"
                        className="w-[155px] text-center mx-auto border border-[#666] py-[10px] block text-[#ccc] rounded-full box-border
                        lg:py-3 lg:text-xl lg:w-[200px] lg:mx-0">
                        {/*프로젝트 문의하기*/}
                        {t('main_inquiry_button')}
                    </Link>
                </ScrollAnimation>
            </div>

            <Footer/>
        </div>
    );
}

Main.propTypes = {};

export default Main;