import React from 'react';
import Nav from "../../component/Nav";
import Footer from "../../component/Footer";
import {Swiper, SwiperSlide} from "swiper/react";
import ProjectDetailList from "../../component/ProjectDetailList";

function ProjectDetail1() {
    return (
        <div className="relative bg-[#111]">
            <Nav/>
            <div className="relative">
                <img src="/images/projects/13_ganghwa_ar/ganghwa_ar_detail_bg.png" alt="projects_detail_bg"
                     className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">강화DMZ 전망대 스마트 체험존 설치용역(AR전망경, AR포토존)</h1>
                <ul className="flex flex-wrap gap-y-2 gap-x-10 text-white pt-5 text-sm lg:text-base lg:pt-10 lg:pb-20">
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Client</p>
                        <span>강화군청</span>
                    </li>
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Date</p>
                        <span>2023.12</span>
                    </li>
                </ul>
                <br/>
                <iframe src="https://www.youtube.com/embed/eHmQOP8r0-8?si=sJKtDhCXFPE3jIcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
                <br/>
                            
            {/* pc ver. Video */}
                {/* <div className="relative w-full h-auto hidden lg:block">
                    <video src="/images/projects/video_sample.mp4" className="w-full h-auto" controls={true} />
                </div> */}
            </div>

            {/* mobile ver. Video */}
            {/* <div className="relative lg:hidden mb-[60px]">
                <video src="/images/projects/video_sample.mp4" className="w-full h-auto" muted={true} controls={true} />
            </div> */}
            <div className="px-5 lg:px-60">
                <p className="font-bold text-white text-xl leading-[30px] lg:leading-[56px] lg:text-[2.5em]">
                강화DMZ 전망대 스마트 체험존 설치용역(AR전망경, AR포토존)<br/>
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                    01 전망경 <br/>
                    망원경 모드 - 가시성이 좋은 날씨 / 직접 조망 모드. 화면의 주요 지형지물의 정보가 AR로 표시됩니다. <br/>
                    클리어 모드 – 가시성이 나쁜 날씨 / 맑은 날에 사전 촬영된 영상에 주요 지형지물의 정보가 AR로 표시됩니다. <br/>
                    오토 모드(음성모드) – 클리어 모드를 기반으로 화면 좌측부터 오른쪽으로 이동하며 앵글 안의 장면을 브리핑합니다.<br/>
                
                </span>
                <img src="/images/projects/13_ganghwa_ar/ganghwa_ar_img1.png" alt="ganghwa_ar_img1"/> <br/>
                <img src="/images/projects/13_ganghwa_ar/ganghwa_ar_img2.png" alt="ganghwa_ar_img2"/> <br/>
                <img src="/images/projects/13_ganghwa_ar/ganghwa_ar_img3.png" alt="ganghwa_ar_img3"/> <br/>
                <img src="/images/projects/13_ganghwa_ar/ganghwa_ar_img4.png" alt="ganghwa_ar_img4"/> <br/>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                    02 AR포토존<br/>
                    인터랙티브 동물원의 끝인 서해바다를 배경으로 AR 카메라센서에 의해 체험자가 합성되어<br/>
                    바다와 물범, 저어새 등과 함께 사진을 찍을 수 있습니다. <br/>
                <br/>
                <img src="/images/projects/13_ganghwa_ar/ganghwa_ar_img5.png" alt="ganghwa_ar_img5"/> <br/>  
                <img src="/images/projects/13_ganghwa_ar/ganghwa_ar_img6.png" alt="ganghwa_ar_img6"/> <br/>
                <img src="/images/projects/13_ganghwa_ar/ganghwa_ar_img7.png" alt="ganghwa_ar_img7"/> <br/>
                </span>

            </div>
            <br/>
            <br/>
            <div className="px-5 pb-10 lg:px-60 lg:pb-[200px]">
                
            </div>
            {/*<ProjectDetailList/>*/}
            <Footer/>
        </div>
    );
}

export default ProjectDetail1;