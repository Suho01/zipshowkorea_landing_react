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
                <img src="/images/projects/12_munja_ar/munja_ar_detail_bg.png" alt="projects_detail_bg"
                     className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">국립세계문자박물관 AR가이드봇</h1>
                <ul className="flex flex-wrap gap-y-2 gap-x-10 text-white pt-5 text-sm lg:text-base lg:pt-10 lg:pb-20">
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Client</p>
                        <span>국립세계문자박물관</span>
                    </li>
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Date</p>
                        <span>2023.12</span>
                    </li>
                </ul>
                <br/>
                <iframe src="https://www.youtube.com/embed/CswZIc_liA8?si=nVH-1606s3ygmWkg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
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
                    2023년 인천 핵심성장 콘텐츠 제작지원<br/>
                    국립세계문자박물관 AR가이드봇 개발<br/>
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                    AR GuideBOT은 AR 도슨트 기능과 AR 네비게이션기술을 결합한 증강현실 기반의 안내 시스템입니다. <br/>
                    가상 정보와 시각적 신호를 실제 환경에 오버레이하여 기존의 AR내비게이션 기능 뿐아니라 도슨트의 경험을 추가하여 <br/>
                    사용자에게 보다 몰입감 있는 탐색 경험을 제공합니다.<br/>
                    <br/>
                    국립세계문자박물관은 많은 전시물과 갤러리로 구성되어 있어 방문객이 원하는 전시물을 찾는 것이 어려울 수 있습니다. <br/>
                    AR 가이드봇은 사용자의 위치를 파악하고, 전시물의 위치와 경로를 시각적으로 안내하여 <br/>
                    방문객이 목적지로 쉽게 도달할 수 있도록 도와줍니다.<br/>

                </span>
                <img src="/images/projects/12_munja_ar/munja_ar_img1.png" alt="munja_ar_img1"/> <br/>
                <img src="/images/projects/12_munja_ar/munja_ar_img2.png" alt="munja_ar_img2"/> <br/>

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