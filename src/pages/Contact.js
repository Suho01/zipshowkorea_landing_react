import React from 'react';
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import {Link} from "react-router-dom";
import {Map, MapMarker} from "react-kakao-maps-sdk";
import {useTranslation} from "react-i18next";

function Contact(){
    const { t } = useTranslation();
    const infoArray = [
        {
            title: "Address",
            desc: t('footer_list8') // "인천광역시 부평구 부평대로 293, 부평테크시티 905호"
        },
        {
            title: "E-Mail",
            desc: "zipshowkorea@gmail.com"
        },
        {
            title: "Tel",
            desc: "+82 70-5180-0011"
        }
    ];

    return (
        <div className="relative bg-[#111]">
            <Nav/>
            <div className="px-5 pt-[100px] pb-20 lg:px-60 lg:pt-[180px] lg:pb-[100px]">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white">Contact</h1>
                <p className="font-normal lg:text-2xl text-[#ccc] pt-5 pb-8 lg:py-8 leading-6 lg:leading-9">
                    {/*집쇼코리아는 다양한 경험과 최신 기술을 보유하고 있으며, <br/>
                    트렌드를 앞서가는 최고의 콘텐츠를 제공하기 위하여 언제나 노력하고 있습니다.*/}
                    {t('contact_title').split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br/>
                        </span>
                    ))}
                </p>
                <Link to="/inquiry"
                    className="block w-40 lg:w-52 text-center cursor-pointer py-[10px] px-5 lg:py-3 lg:px-7 border border-[#666] rounded-full">
                    <p className="text-[#ccc] lg:text-xl font-normal">
                        {/*프로젝트 문의하기*/}
                        {t('main_inquiry_button')}
                    </p>
                </Link>
            </div>
            <div className="px-5 pb-20 lg:px-60 lg:pb-[140px]">
                <ul className="flex lg:flex-row flex-col flex-wrap gap-4 lg:gap-[60px] pb-5 lg:pb-8">
                    {
                        infoArray.map((e, i) => {
                            return (
                                <li key={i} className="flex lg:flex-row flex-col lg:items-center lg:gap-3 gap-[6px] font-bold">
                                    <p className="text-[#e0474b] text-sm">{e.title}</p>
                                    <span className="text-white">{e.desc}</span>
                                </li>
                            );
                        })
                    }
                </ul>
                <Map
                    center={{ lat: 37.51772543312965, lng: 126.72097049285198 }}
                    className="w-full h-[280px] lg:h-auto lg:aspect-[1440/480] pointer-events-auto touch-manipulation">
                    <MapMarker
                        position={{ lat: 37.51772543312965, lng: 126.72097049285198 }}
                    >
                        {/*<div>집쇼코리아</div>*/}
                    </MapMarker>
                </Map>
            </div>

            <Footer/>
        </div>
    );
}

Contact.propTypes = {};

export default Contact;