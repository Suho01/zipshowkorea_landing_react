import React from 'react';
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import {Swiper, SwiperSlide} from "swiper/react";
import ProjectDetailList from "../component/ProjectDetailList";

function ProjectDetail() {
    return (
        <div className="relative bg-[#111]">
            <Nav />
            <div className="relative">
                <img src="/images/projects/projects_detail_bg.png" alt="projects_detail_bg" className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">강화 DMZ 평화전망대 미디어아트 '인터랙티브 동물원'</h1>
                <ul className="flex flex-wrap gap-y-2 gap-x-10 text-white pt-5 text-sm lg:text-base lg:pt-10 lg:pb-20">
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Client</p>
                        <span>인천테크노파크, 강화 DMZ 평화전망대</span>
                    </li>
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Date</p>
                        <span>2023.08</span>
                    </li>
                </ul>

                {/* pc ver. Video */}
                <div className="relative w-full h-auto hidden lg:block">
                    <video src="/images/projects/video_sample.mp4" className="w-full h-auto" muted={true} controls={true} />
                </div>
            </div>

            {/* mobile ver. Video */}
            <div className="relative lg:hidden mb-[60px]">
                <video src="/images/projects/video_sample.mp4" className="w-full h-auto" muted={true} controls={true} />
            </div>
            <div className="px-5 lg:px-60">
                <p className="font-bold text-white text-xl leading-[30px] lg:leading-[56px] lg:text-[2.5em]">
                    강화 DMZ에 서식중인 동물들을 볼 수 있는 <br/>
                    생생한 시각적인 경험
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                    Lorem ipsum dolor sit ame Congue libero ipsumLorem ipsum dolor sit ame Congue libero ipsumLorem ipsum dolor sit ame Congue libero ipsumLorem ip <br/>
                    ipsum dolor sit ame Congue libero ipsumLorem ipsum dolor sit ame Congue libero ipsumLorem ipsum dolor sit ame Congue libero ipsumLorem ipsum dolor sit ame C <br/>
                    dolor sit ame Congue libero ipsumLorem ipsum dolor sit ame Congue libero ipsum
                </span>
                <img src="/images/projects/projects_detail_image.png" alt="projects_detail_image"/>
            </div>
            <div className="w-full py-[60px] lg:py-[200px] flex flex-col gap-y-[60px] lg:gap-y-[200px]">
                <img src="/images/projects/projects_detail_image2.png" alt="projects_detail_image2"/>
                <img src="/images/projects/projects_detail_image2.png" alt="projects_detail_image2"/>
            </div>
            <div className="px-5 pb-10 lg:px-60 lg:pb-[200px]">
                <p className="font-bold text-2xl lg:text-[2.5em] text-white">흥미로운 인터랙티브 체험</p>
                <span className="lg:text-lg text-[#f0f0f0] leading-6 lg:leading-8 block pt-5 pb-10 lg:pt-8 lg:pb-[60px]">
                    Lorem ipsum dolor sit ame Congue libero ipsumLorem ipsum dolor sit ame <br/>
                    ipsum dolor sit ame Congue libero ipsumLorem ipsum dolor sit ame Congue libero ipsumLorem ipsum dolor sit ame
                </span>
                {/* pc ver. 흥미로운 인터랙티브 체험 이미지 */}
                <div className="lg:flex flex-wrap gap-5 hidden">
                    {
                        Array(4).fill().map((_, i) => {
                            return (
                                <img src={`/images/projects/experience${i + 1}.png`} alt={`experience${i + 1}`} className="w-[calc(50%-20px)]"/>
                            );
                        })
                    }
                </div>

                {/* mobile ver. 흥미로운 인터랙티브 체험 이미지 슬라이드 */}
                <div className="lg:hidden">
                    <Swiper
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        spaceBetween={30}
                    >
                        {
                            Array(4).fill().map((_, i) => {
                                return (
                                    <SwiperSlide>
                                        <img src={`/images/projects/experience${i + 1}.png`} alt={`experience${i + 1}`}/>
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                </div>
            </div>
            {/*<ProjectDetailList/>*/}
            <Footer/>
        </div>
    );
}

ProjectDetail.propTypes = {};

export default ProjectDetail;