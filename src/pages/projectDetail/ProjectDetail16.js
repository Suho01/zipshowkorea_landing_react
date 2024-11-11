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
                <img src="/images/projects/16_parksookeun_ar/parksookeun_ar_detail_bg.png" alt="parksookeun_ar_detail_bg"
                     className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">박수근미술관 AR체험</h1>
                <ul className="flex flex-wrap gap-y-2 gap-x-10 text-white pt-5 text-sm lg:text-base lg:pt-10 lg:pb-20">
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Client</p>
                        <span>박수근미술관</span>
                    </li>
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Date</p>
                        <span>2021.02</span>
                    </li>
                </ul>
                <br/>
                {/* <iframe src="https://www.youtube.com/embed/QYlDzBM9sJ0?si=2jklvhgIWc5hUFuu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
                <br/> */}
                            
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
                박수근 미술관 AR체험<br/>
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                    카메라와 모션 센서로 사용자의 모습을 투영하여, 가상공간 속 실제로 존재하는 듯한 느낌을 선사합니다. <br/>
                    입장하는 관람객 뒤에 보이는 박수근 작품 속 동물(소,닭 등)들. AR로 구현된 박수근 그림 속 동물들이 관람객을 따라오며 그의 생애로 인도합니다.<br/>
                    <br/>
                </span>
                <img src="/images/projects/16_parksookeun_ar/parksookeun_ar_img1.png" alt="parksookeun_ar_img1"/> <br/>
                <img src="/images/projects/16_parksookeun_ar/parksookeun_ar_img2.png" alt="parksookeun_ar_img2"/> <br/>
                <img src="/images/projects/16_parksookeun_ar/parksookeun_ar_img3.png" alt="parksookeun_ar_img3"/> <br/>
                <img src="/images/projects/16_parksookeun_ar/parksookeun_ar_img4.png" alt="parksookeun_ar_img4"/> <br/>              
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