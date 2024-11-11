import React, {useEffect, useRef, useState} from 'react';
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {Link, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";
import i18n from "i18next";

function About() {
    const { t } = useTranslation();

    const serviceArray = [
        {
            title: t('about_serviceArray_title1'), // "디지털 미디어아트"
            desc: [
                /*<span>
                    국공립 박물관, 미술관 실감미디어 제작으로 축적된 기술과 경험을 바탕으로 보다 몰입도 높은 경험을 전달하는 실감미디어 콘텐츠를 제작합니다. <br/>
                    <b>미디어파사드, 인터랙티브 미디어아트, AI 미디어아트 등</b> 고객들에게 생동감 넘치고 새로운 콘텐츠 경험을 제공합니다.
                </span>*/
                <span>
                    {t('about_serviceArray_desc_span1_1')} <br/>
                    <b>{t('about_serviceArray_desc_span1_2')}</b> {t('about_serviceArray_desc_span1_3')}
                </span>
            ]
        },
        {
            title: "AR/VR",
            desc: [
                /*<span>
                    현실 세계에 3차원의 가상정보를 부합시켜 보여주는 AR/VR 기술을 제공합니다. <br/>
                    <b>AR 내비게이션, AR 도슨트, AR 전망경 등의 시스템을 구현합니다.</b>
                </span>*/
                <span>
                    {t('about_serviceArray_desc_span2_1')} <br/>
                    <b>{t('about_serviceArray_desc_span2_2')}</b>
                </span>
            ]
        },
        {
            title: t('about_serviceArray_title3'), // "3D 스캔"
            desc: [
                /*<span>
                    다양한 360VR 장비 및 시스템을 활용한 360VR 콘텐츠를 제작합니다. <br/>
                    <b>300여개 이상의 하이테크 실감 콘텐츠 기술을 활용한 제작경험으로 독보적 전시 안내 환경 구축 역량을 보유하였습니다.</b><br/>
                    실제 공간을 정확하고 몰입감 있는 가상 공간으로 구축하여 체험할 수 있도록 돕습니다.
                </span>*/
                <span>
                    {t('about_serviceArray_desc_span3_1')} <br/>
                    <b>{t('about_serviceArray_desc_span3_2')}</b><br/>
                    {t('about_serviceArray_desc_span3_3')}
                </span>
            ]
        },
        {
            title: t('about_serviceArray_title4'), // "웹&앱 개발"
            desc: [
                /*<span>
                    <b>국·공립기관 온라인 플랫폼 개발 노하우</b>를 가지고 웹페이지 제작, 360VR 프로그램 내 콘텐츠 삽입, 관리자 페이지, 키오스크 등의 웹, 앱 기반 홈페이지 및 시스템 구축을 진행합니다.
                </span>*/
                <span>
                    <b>{t('about_serviceArray_desc_span4_1')}</b>{t('about_serviceArray_desc_span4_2')}
                </span>
            ]
        },
        {
            title: t('about_serviceArray_title5'), // "영상 제작"
            desc: [
                /*<span>
                    <b>프리 프로덕션(기획), 메인 프로덕션(제작), 포스트 프로덕션(최종 아웃풋) 단계</b>를 거쳐 전문 작업자들이 2D 및 3D 영상을 제작합니다. <br/>
                    기획부터 마감까지 모든 과정을 총괄하여 진행합니다.
                </span>*/
                <span>
                    <b>{t('about_serviceArray_desc_span5_1')}</b>{t('about_serviceArray_desc_span5_2')} <br/>
                    {t('about_serviceArray_desc_span5_3')}
                </span>
            ]
        },
    ];

    const historyArray = [
        t('about_historyArray_1'), // "한국근대문학관 전시 안내 환경 조성",
        t('about_historyArray_2'), // "인천지역특화콘텐츠개발(소래역사관)",
        t('about_historyArray_3'), // "생활SOC기반 실감형 콘텐츠 체험존 구축 및 운영지원사업",
        t('about_historyArray_4'), // "충남도청 3D 공간정보 콘텐츠 구축"
    ];

    const [openHistory, setOpenHistory] = useState(0);
    const handleToggle = (index) => {
        setOpenHistory(openHistory === index ? null : index);
    };

    // const menuList = ["전체", "시군/정부기관/재단", "박물관/미술관/학교", "일반기업"];
    const menuList = [t('about_menuList_1'), t('about_menuList_2'), t('about_menuList_3'), t('about_menuList_4'),];
    const [active, setActive] = useState(t('about_menuList_1'));
    const clickActive = (category) => {
        setActive(category);
    }
    const images = Array(51).fill().map((_, i) => `/images/about/partner/Frame ${i + 47}.png`);
    const filteredImages = () => {
        switch (t(active)) {
            case t('about_menuList_2'): // 시군/정부기관/재단
                return images.slice(0, 17);
            case t('about_menuList_3'): // 박물관/미술관/학교
                return images.slice(17, 34);
            case t('about_menuList_4'): // 일반기업
                return images.slice(34, 51);
            default:
                return images;
        }
    }

    useEffect(() => {
        setActive(t('about_menuList_1'));
    }, [i18n.language]);

    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const container = containerRef.current;

        const handleScroll = (event) => {
            event.preventDefault();
            const totalItems = container.children.length;

            if (event.deltaY > 0 && currentIndex < totalItems - 1) {
                setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalItems - 1));
            } else if (event.deltaY < 0 && currentIndex > 0) {
                setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            }
        };

        container.addEventListener('wheel', handleScroll);

        return () => {
            container.removeEventListener('wheel', handleScroll);
        };
    }, [currentIndex]);

    const prevArrow = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };
    const nextArrow = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, serviceArray.length - 1));
    };

    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#about_our_service' && containerRef.current) {
            containerRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }, [location]);

    const downloadFile = () => {
        const language = i18n.language;
        const fileName = language === "en" ? "zipshowkorea_en.pdf" : "zipshowkorea_kr.pdf";
        const url = `/images/common/${fileName}`;

        fetch(url, { method: 'GET' })
            .then((res) => res.blob())
            .then((blob) => {
                const pdfBlob = new Blob([blob], { type: "application/pdf" });
                const downloadUrl = window.URL.createObjectURL(pdfBlob);
                const a = document.createElement('a');
                a.href = downloadUrl;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                setTimeout(() => {
                    window.URL.revokeObjectURL(downloadUrl);
                }, 60000);
                a.remove();
            })
            .catch((err) => {
                console.error('Download error: ', err);
            });
    };

    return (
        <div className="relative bg-[#111]">
            <Nav/>
            <div
                className="h-auto bg-about-bg bg-no-repeat object-cover bg-cover px-5 py-[100px] lg:px-60 lg:py-[180px] font-bold text-white">
                <h1 className="text-2xl lg:text-[3.5em]">About us</h1>
                <h3 className="text-xl lg:text-[2.5em] pt-8 pb-5 lg:pt-[60px] lg:pb-8">
                    {/*스마트 콘텐츠 제작 전문 기업*/}
                    {t('about_title')}
                </h3>
                <p className="font-normal lg:text-2xl text-[#ccc] pb-10 lg:pb-[60px] leading-6 lg:leading-9">
                    {/*집쇼코리아는 스마트 콘텐츠 제작 전문 기업으로 다양한 영역에서 혁신적인 콘텐츠를 제작하고 있습니다. <br/>
                    주요 사업으로는 온라인 전시관, VR, AR, 미디어 월, 인공지능(AI) 콘텐츠, 초고해상도 8K 콘텐츠, 실감 체험존 및 엔터테인먼트 분야가 있습니다. <br/>
                    집쇼코리아는 기술과 창의력을 결합하여 트렌디하고 흥미로운 콘텐츠를 제공하며 이를 통해 새로운 경험과 감동을 선사합니다.*/}
                    {t('about_desc').split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br/>
                        </span>
                    ))}
                </p>
                <button
                    onClick={downloadFile}
                    className="cursor-pointer flex items-center gap-x-[10px] py-[10px] px-5 lg:py-3 lg:px-7 border border-[#666] rounded-full mr-5">
                    <p className="text-[#ccc] lg:text-xl font-normal">
                        {/*회사소개서 다운로드*/}
                        {t('footer_download')}
                    </p>
                    <img src="/images/common/download.svg" alt="download"/>
                </button>
            </div>
            <div className="pt-[60px] px-5 lg:pt-[140px] lg:px-60" id="about_our_service">
                <p className="font-bold text-2xl lg:text-[2.5em] text-white pb-8 lg:pb-[60px]">Our Service</p>

                {/* pc ver. Our Service */}
                <div ref={containerRef}
                     className="hidden lg:block overflow-y-auto h-[560px] scrollbar-hidden-y relative">
                    {serviceArray.map((e, i) => (
                        <div
                            key={i}
                            className={`flex w-full h-[560px] absolute top-0 left-0 transition-master duration-1000 ease-in-out ${currentIndex === i ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            style={{zIndex: 10 - i}}
                        >
                            <img src={`/images/about/service_${i + 1}.png`} alt={`service_${i + 1}`}
                                 className="basis-1/2 w-1/2 object-cover"/>
                            <ul className={`pl-20 py-[7.5%] basis-1/2 flex flex-col gap-y-10 relative transition-master duration-1000 ease-in-out ${currentIndex === i ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                                <li className="font-bold text-[2.5em] text-white">{e.title}</li>
                                <li className="text-lg text-[#ccc] leading-8 basis-3/5">
                                    {e.desc.map((line, index) => (
                                        <div key={index}>{line}</div>
                                    ))}
                                </li>
                                <li>
                                    <Link
                                        to={`/projects?filter=${encodeURIComponent(e.title)}`}
                                        className="w-[226px] flex justify-between items-center gap-x-[10px] rounded-full border border-[#666] pl-7 pr-[21px] py-3 cursor-pointer "
                                    >
                                        <p className="text-xl text-[#ccc]">
                                            {/*프로젝트 보러가기*/}
                                            {t('about_more_button')}
                                        </p>
                                        <img src="/images/main/arrow.svg" alt="arrow"/>
                                    </Link>
                                </li>
                            </ul>
                            <div>
                                <button
                                    onClick={prevArrow}
                                    className={`absolute right-0 bottom-[156px] z-20 transition-opacity duration-300 ${currentIndex === 0 ? 'opacity-30 cursor-default' : 'opacity-100 cursor-pointer'}`}
                                    disabled={currentIndex === 0}
                                >
                                    <img src="/images/about/arrow.svg" alt="Previous" className="rotate-180"/>
                                </button>
                                <button
                                    onClick={nextArrow}
                                    className={`absolute right-0 bottom-[110px] z-20 transition-opacity duration-300 ${currentIndex === serviceArray.length - 1 ? 'opacity-30 cursor-default' : 'opacity-100 cursor-pointer'}`}
                                    disabled={currentIndex === serviceArray.length - 1}
                                >
                                    <img src="/images/about/arrow.svg" alt="Next" className=""/>
                                </button>
                            </div>
                        </div>

                    ))}
                </div>


                {/* mobile ver. Our Service */}
                <div className="flex lg:hidden">
                    <Swiper
                        // autoHeight={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="ourServiceSwiper"
                    >
                        {
                            serviceArray.map((e, i) => {
                                return (
                                    <>
                                        <SwiperSlide>
                                            <img key={i} src={`/images/about/service_${i + 1}.png`}
                                                 alt={`service_${i + 1}`}/>
                                            <div className="pt-3 pb-20">
                                                <h3 className="font-bold text-2xl text-white pb-3">{e.title}</h3>
                                                <p className="leading-6 text-[#ccc]">{e.desc}</p>
                                            </div>
                                            <div className="absolute bottom-0">
                                                <Link to={`/projects?filter=${encodeURIComponent(e.title)}`}
                                                      className="w-[192px] flex items-center justify-between gap-x-[10px] rounded-full border border-[#666] px-5 py-[10px] cursor-pointer">
                                                    <p className="text-[#ccc]">
                                                        {/*프로젝트 보러가기*/}
                                                        {t('about_more_button')}
                                                    </p>
                                                    <img src="/images/main/arrow.svg" alt="arrow"/>
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    </>

                                );
                            })
                        }
                    </Swiper>
                </div>
            </div>
            <div className="py-[60px] px-5 lg:p-60">
                <p className="font-bold text-2xl lg:text-[2.5em] text-white pb-3 lg:pb-8">Our Partners</p>
                <ul className="flex flex-wrap lg:text-xl text-[#ccc] text-center gap-x-6 gap-y-2 lg:gap-x-14 pb-5 lg:pb-[60px]">
                    {
                        menuList.map((e, i) => {
                            return (
                                <li key={i} onClick={() => clickActive(e)}
                                    className={`cursor-pointer last:after:w-full ${active === e ? 'activeList' : ''}`}>{e}</li>
                            );
                        })
                    }
                </ul>
                <div className="flex flex-wrap gap-y-[10px] lg:gap-y-8">
                    {
                        filteredImages().map((src, i) => {
                            return (
                                <img key={i} src={src} alt={`Frame ${i + 47}`} className="w-1/3 lg:w-1/6"/>
                            );
                        })
                    }
                </div>
            </div>
            <div className="px-5 lg:px-60">
                <p className="font-bold text-2xl lg:text-[2.5em] text-white">Our History</p>
                <div className="pt-8 lg:pt-[60px] pb-[60px] lg:pb-[100px]">
                    {
                        Array(6).fill().map((_, index) => {
                            const isOpen = openHistory === index;
                            return (
                                <ul key={index} className="text-white">
                                    <li onClick={() => handleToggle(index)}
                                        className="py-[14px] lg:py-6 pl-5 lg:pl-10 flex gap-x-10 border-t border-b border-[#ccc] cursor-pointer">
                                        <p className="font-bold lg:text-2xl">{2024 - index}</p>
                                        <img src="/images/about/arrow.svg" alt="arrow" className={`${isOpen ? '' : 'transform: -rotate-90'}`}/>
                                    </li>
                                    {
                                        isOpen && historyArray.map((e, i) => {
                                            return (
                                                <li key={i}
                                                    className="py-[14px] lg:py-6 pl-3 lg:pl-10 flex gap-x-[10px] lg:gap-x-5 text-sm lg:text-lg border-b border-[#333] last:border-none">
                                                    <p className="font-bold ">0{i}</p>
                                                    <span>{e}</span>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            );
                        })
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
}

About.propTypes = {};

export default About;