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
                <img src="/images/projects/17_goheung_vr/goheung_vr_detail_bg.png" alt="goheung_vr_detail_bg"
                     className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">고흥 드론택시 360VR</h1>
                <ul className="flex flex-wrap gap-y-2 gap-x-10 text-white pt-5 text-sm lg:text-base lg:pt-10 lg:pb-20">
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Client</p>
                        <span>고흥군청</span>
                    </li>
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Date</p>
                        <span>2022.03</span>
                    </li>
                </ul>
                <br/>
                <iframe src="https://www.youtube.com/embed/4Y1tg7DaQ80?si=fTo4frQiEnyhBrYq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
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
                고흥 드론택시 360VR<br/>
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                    고흥드론택시로 고흥드론센터 - 녹동항 - 거금대교 - 거금해안경관 - 쑥섬 - 팔영산 - 나로우주센터를 체험하는 VR영상입니다. <br/>
                    <br/>
                </span>
                <img src="/images/projects/17_goheung_vr/goheung_vr_img1.png" alt="goheung_vr_img1"/> <br/>
                <img src="/images/projects/17_goheung_vr/goheung_vr_img2.jpg" alt="goheung_vr_img2"/> <br/>
                <img src="/images/projects/17_goheung_vr/goheung_vr_img3.jpg" alt="goheung_vr_img3"/> <br/>
                <img src="/images/projects/17_goheung_vr/goheung_vr_img4.jpg" alt="goheung_vr_img4"/> <br/>
                <img src="/images/projects/17_goheung_vr/goheung_vr_img5.png" alt="goheung_vr_img5"/> <br/>
             

                
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