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
                <img src="/images/projects/05_king_kimsuro/king_kimsuro_detail_bg.png" alt="parksookeun_detail_bg"
                     className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">김해박물관역 &lt;King Kimsuro&gt; 미디어파사드</h1>
                <ul className="flex flex-wrap gap-y-2 gap-x-10 text-white pt-5 text-sm lg:text-base lg:pt-10 lg:pb-20">
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Client</p>
                        <span>김해시청</span>
                    </li>
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Date</p>
                        <span>2022.06</span>
                    </li>
                </ul>
                <br/>
                <iframe src="https://www.youtube.com/embed/dIpE0cxAU50?si=m1AajjLiqIYC896N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
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
                김해박물관역 &lt;King Kimsuro&gt; 미디어파사드<br/>
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                    김수로왕의 신화를 금관가야의 유물로 보여주는 미디어 아트입니다.<br/>
                    단순 콘텐츠 제작이 아닌 박물관역의 형태를 이용하여 입체감이 표현되도록 제작하였습니다.<br/>

                    <br/>
                </span>
                <img src="/images/projects/05_king_kimsuro/king_kimsuro_img2.jpg" alt="king_kimsuro_img2"/> <br/>
                <img src="/images/projects/05_king_kimsuro/king_kimsuro_img3.jpg" alt="king_kimsuro_img3"/> <br/>
                <img src="/images/projects/05_king_kimsuro/king_kimsuro_img4.jpg" alt="king_kimsuro_img4"/> <br/>
                <img src="/images/projects/05_king_kimsuro/king_kimsuro_img5.jpg" alt="king_kimsuro_img5"/> <br/>
                <img src="/images/projects/05_king_kimsuro/king_kimsuro_img6.jpg" alt="king_kimsuro_img6"/> <br/>
                <img src="/images/projects/05_king_kimsuro/king_kimsuro_img7.jpg" alt="king_kimsuro_img7"/> <br/>
            </div>
            <br/>
            <br/>
            <div className="px-5 pb-10 lg:px-60 lg:pb-[200px]">
                <p className="font-bold text-2xl lg:text-[2.5em] text-white">김해박물관역 &lt;King Kimsuro&gt; 미디어파사드 현장 설치 영상</p>
                <span
                    className="lg:text-lg text-[#f0f0f0] leading-6 lg:leading-8 block pt-5 pb-10 lg:pt-8 lg:pb-[60px]">
                    부산 김해박물관역 외벽에 프로젝션 맵핑을 통해 미디어 파사드 영상이 송출됩니다. <br/>
                    
                </span>
                <iframe src="https://www.youtube.com/embed/TcbpGc_9ha4?si=-gwaAUs0r6_IO7q6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
                <br/>
                <br/>
                <br/>
              
                
            </div>
            {/*<ProjectDetailList/>*/}
            <Footer/>
        </div>
    );
}

export default ProjectDetail1;