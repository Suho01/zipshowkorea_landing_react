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
                <img src="/images/projects/08_ganghwa/ganghwa_detail_bg.png" alt="projects_detail_bg"
                     className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">고흥군 스마트 현홍도 미디어아트 제작 '흥양만경, 고흥을 비추다'</h1>
                <ul className="flex flex-wrap gap-y-2 gap-x-10 text-white pt-5 text-sm lg:text-base lg:pt-10 lg:pb-20">
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Client</p>
                        <span>고흥군청</span>
                    </li>
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Date</p>
                        <span>2021.03</span>
                    </li>
                </ul>
                <br/>
                <iframe src="https://www.youtube.com/embed/vL9agNEFxWU?si=FhiVy2ytByd0IU6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
                <br/>
                <iframe src="https://www.youtube.com/embed/sBWAV2onUDg?si=eCph-RfY2A4420Aa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
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
                고흥군 스마트 현홍도 미디어아트 제작 '흥양만경, 고흥을 비추다'<br/>
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                 바다와 바람이 만든 땅, 고흥<br/>
                 고흥의 자연과 역사, 과거와 현재를 소재로 구현 한 미디어아트 기반의 몰입형 전시입니다.<br/>


                 </span>
                <img src="/images/projects/09_goheung/goheung_img1.png" alt="goheung_img1"/> <br/>
                <img src="/images/projects/09_goheung/goheung_img2.png" alt="goheung_img2"/> <br/>
                <img src="/images/projects/09_goheung/goheung_img3.png" alt="goheung_img3"/> <br/>
                <img src="/images/projects/09_goheung/goheung_img4.png" alt="goheung_img4"/> <br/>
                <img src="/images/projects/09_goheung/goheung_img5.png" alt="goheung_img5"/> <br/>
                <img src="/images/projects/09_goheung/goheung_img6.png" alt="goheung_img6"/> <br/>
                <img src="/images/projects/09_goheung/goheung_img7.png" alt="goheung_img7"/> <br/>


            </div>

            <div className="px-5 pb-10 lg:px-60 lg:pb-[200px]">
            </div>
            {/*<ProjectDetailList/>*/}
            <Footer/>
        </div>
    );
}

export default ProjectDetail1;