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
                <img src="/images/projects/21_dokdo/dokdo_detail_bg.png" alt="projects_detail_bg"
                     className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">문화재청 독도12K 파노라마 & 360VR콘텐츠 제작</h1>
                <ul className="flex flex-wrap gap-y-2 gap-x-10 text-white pt-5 text-sm lg:text-base lg:pt-10 lg:pb-20">
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Client</p>
                        <span>문화재청</span>
                    </li>
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Date</p>
                        <span>2021.11</span>
                    </li>
                </ul>
                <br/>
                <iframe src="https://www.youtube.com/embed/GlKy6AxRh7U?si=bMcVsJjHqRyWgRxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
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
                문화재청 독도12K 파노라마 & 360VR콘텐츠 제작<br/>
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                    반갑다 독도야<br/>
                    독도를 가지 않아도 관람현장에서 독도를 와 있는 듯한 현장감과 몰입감에 포커스를 둔 영상입니다.<br/>
                    <br/>
                </span>
                <img src="/images/projects/21_dokdo/dokdo_img1.png" alt="dokdo_img1"/> <br/>
                <img src="/images/projects/21_dokdo/dokdo_img2.png" alt="dokdo_img2"/> <br/>
                <img src="/images/projects/21_dokdo/dokdo_img3.png" alt="dokdo_img3"/> <br/>
                <img src="/images/projects/21_dokdo/dokdo_img4.png" alt="dokdo_img4"/> <br/>
                <img src="/images/projects/21_dokdo/dokdo_img5.png" alt="dokdo_img5"/> <br/>




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