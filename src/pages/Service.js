import React, {useEffect, useRef} from 'react';
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {useTranslation} from "react-i18next";

function Service() {
    const { t } = useTranslation();

    const serviceArray = [
        {
            title: t('about_serviceArray_title1'), // "디지털 미디어아트"
            desc: [
                <span>
                    {t('about_serviceArray_desc_span1_1')} <br/>
                    <b>{t('about_serviceArray_desc_span1_2')}</b> {t('about_serviceArray_desc_span1_3')}
                </span>
            ]
        },
        {
            title: "AR/VR",
            desc: [
                <span>
                    {t('about_serviceArray_desc_span2_1')} <br/>
                    <b>{t('about_serviceArray_desc_span2_2')}</b>
                </span>
            ]
        },
        {
            title: t('about_serviceArray_title3'), // "3D 스캔"
            desc: [
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
                <span>
                    <b>{t('about_serviceArray_desc_span4_1')}</b>{t('about_serviceArray_desc_span4_2')}
                </span>
            ]
        },
        {
            title: t('about_serviceArray_title5'), // "영상 제작"
            desc: [
                <span>
                    <b>{t('about_serviceArray_desc_span5_1')}</b>{t('about_serviceArray_desc_span5_2')} <br/>
                    {t('about_serviceArray_desc_span5_3')}
                </span>
            ]
        },
    ];

    return (
        <div className="relative bg-[#111]">
            <Nav/>
            <div className="px-5 pt-[100px] pb-20 lg:px-60 lg:pt-[180px] lg:pb-[100px]" id="our_service">

                {/* pc ver. */}
                <div className="hidden lg:block relative pt-10 pb-8">
                    {
                        serviceArray.map((e, i) => (
                            <div
                                key={i}
                                className={`flex w-full transition-master duration-1000 ease-in-out pb-60`}
                            >
                                <img
                                    src={`/images/about/service_${i + 1}.png`}
                                    alt={`service_${i + 1}`}
                                    className="basis-1/2 w-1/2 object-cover"/>
                                <ul className={`pl-20 py-[7.5%] basis-1/2 flex flex-col gap-y-10 relative transition-master duration-1000 ease-in-out`}>
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
                            </div>
                        ))
                    }
                </div>

                {/* mobile ver. */}
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
            <Footer/>
        </div>
    );
}

export default Service;