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
                <img src="/images/projects/19_nature/nature_detail_bg.png" alt="projects_detail_bg"
                     className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">자연과 전통 건축</h1>
                <ul className="flex flex-wrap gap-y-2 gap-x-10 text-white pt-5 text-sm lg:text-base lg:pt-10 lg:pb-20">
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Client</p>
                        <span>문화재청</span>
                    </li>
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Date</p>
                        <span>2021.10</span>
                    </li>
                </ul>
                <br/>
                <iframe src="https://www.youtube.com/embed/oj-zBjjBT5o?si=FzFPVEHxsyairBf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
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
                자연과 전통 건축<br/>
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                    한국 전통 건축의 특징에 대해 과거의 전통을 존중하되, 미래로 이어 나갈, 우아하고 격조 있는 영상으로 표현합니다.<br/>
                    <br/>
                    한국의 전통 건축이란, 스며드는 것입니다.<br/>
                    자연의 허락을 받아 그 안에 잠시 스며드는 것입니다.<br/>
                    건축물의 위치를 정하고 그 방향을 정할 때에도,<br/>
                    자연을 깍고 밀어내서 인간의 터를 잡는 것이 아니라,<br/>
                    원래 있는 그대로의 지형을 따라,<br/>
                    터를 잡고, 길을 내고, 그 높이와 넓이를 정합니다.<br/>
                </span>
                <img src="/images/projects/19_nature/nature_img1.png" alt="nature_img1"/> <br/>
                <img src="/images/projects/19_nature/nature_img2.png" alt="nature_img2"/> <br/>
                <img src="/images/projects/19_nature/nature_img3.png" alt="nature_img3"/> <br/>
                <img src="/images/projects/19_nature/nature_img4.png" alt="nature_img4"/> <br/>
                <img src="/images/projects/19_nature/nature_img5.png" alt="nature_img5"/> <br/>


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