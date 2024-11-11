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
                <img src="/images/projects/18_haman/haman_detail_bg.png" alt="projects_detail_bg"
                     className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">아라가야의 불꽃 애니메이션 제작, 함안박물관</h1>
                <ul className="flex flex-wrap gap-y-2 gap-x-10 text-white pt-5 text-sm lg:text-base lg:pt-10 lg:pb-20">
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Client</p>
                        <span>함안박물관</span>
                    </li>
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Date</p>
                        <span>2024.03</span>
                    </li>
                </ul>
                <br/>
                <iframe src="https://www.youtube.com/embed/hqixCR4XQ5A?si=PbpwnFhLCclN41yD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
                <br/>
                <iframe src="https://www.youtube.com/embed/ZXQEvHQqptY?si=HqGLb9xg95G6gCcC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
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
                함안박물관 영상 콘텐츠 제작 용역 - 뮤지컬 애니메이션<br/>
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                    태초에 하늘신은 분노를 통제하지 못하는 구름의 신, 비올신의 정수를 빼내어 아라가야의 제단(결계)에 봉인하였습니다. <br/>
                    아라가야인은 비올신의 정수에 기우제를 지내며 극진히 모십니다.<br/>
                    비를 원하는 기도에도 불구하고 가뭄이 극심하던 어느 날, <br/>
                    제단에서 비올신의 정수가 사라지는 사건이 발생하고 비올신의 분노가 깨어나게 됩니다.<br/>
                </span>
                <img src="/images/projects/18_haman/haman_img0.png" alt="haman_img1"/> <br/>
                <img src="/images/projects/18_haman/haman_img1.png" alt="haman_img1"/> <br/>
                <img src="/images/projects/18_haman/haman_img2.png" alt="haman_img2"/> <br/>
                <img src="/images/projects/18_haman/haman_img3.png" alt="haman_img3"/> <br/>
                <img src="/images/projects/18_haman/haman_img4.png" alt="haman_img4"/> <br/>
                <img src="/images/projects/18_haman/haman_img5.png" alt="haman_img5"/> <br/>
                <img src="/images/projects/18_haman/haman_img6.png" alt="haman_img6"/> <br/>
                <img src="/images/projects/18_haman/haman_img7.png" alt="haman_img7"/> <br/>
                <img src="/images/projects/18_haman/haman_img8.png" alt="haman_img8"/> <br/>
                <img src="/images/projects/18_haman/haman_img9.png" alt="haman_img9"/> <br/>

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