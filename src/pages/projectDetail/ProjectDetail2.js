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
                <img src="/images/projects/02_ganghwa_media/ganghwa_media_detail_bg.png" alt="projects_detail_bg"
                     className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">강화 DMZ전망대 미디어아트(인터랙티브 동물원)</h1>
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
                <iframe src="https://www.youtube.com/embed/NzDG_EIyXnM?si=-4UQzT8UvhBJGg7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
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
                    강화 DMZ 전망대 스마트 체험존 설치 용역<br/>
                    미디어아트 '인터랙티브 동물원'<br/>
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                    DMZ의 24시간을 연출합니다. 동이 트는 새벽에서 활기가 넘치는 한낮, 불게 물드는 서해의 노을에 이어<br/>
                    달이 뜨고 은하수가 청정 하늘을 수놓자 또 다른 생명들의 활동이 움틉니다.<br/>
                    이러한 시공에 우리가 한 가운데 놓입니다. DMZ에 서식하는 동물은 나의 행봉에 반응하고 친금감을 보입니다.<br/>
                    내가 걷는 발걸음이 생명을 부여하는 듯, 풀이 돋고 꽃이 피며 이 곳에 온 나를 환영합니다.<br/>
                    어느덧 나도 이 곳에 동화되어 자연의 일부임을 깨닫게 되고 DMZ의 가치를 체험으로 소유하게 됩니다.
                </span>
                <img src="/images/projects/02_ganghwa_media/ganghwa_img1.jpg" alt="munja_kiosk"/> <br/>
                <img src="/images/projects/02_ganghwa_media/ganghwa_img2.jpg" alt="munja_wide_image1"/> <br/>
                <img src="/images/projects/02_ganghwa_media/ganghwa_img3.jpg" alt="munja_wide_image1"/> <br/>
                <img src="/images/projects/02_ganghwa_media/ganghwa_img4.jpg" alt="munja_wide_image1"/> <br/>
            </div>
            <br/>
            <br/>
            <div className="px-5 pb-10 lg:px-60 lg:pb-[200px]">
                <p className="font-bold text-2xl lg:text-[2.5em] text-white">흥미로운 인터랙티브 체험</p>
                <span
                    className="lg:text-lg text-[#f0f0f0] leading-6 lg:leading-8 block pt-5 pb-10 lg:pt-8 lg:pb-[60px]">
                    강화 DMZ 평화전망대 인터랙티브 동물원에는 다양한 동물들이 살고 있습니다.<br/>
                    숲, 바다, 갯벌에 등장하는 동물들을 터치하고 동물들의 반응을 확인해 보세요.<br/>
                </span>
                <iframe src="https://www.youtube.com/embed/CgPhKhb4doQ?si=uczgZJGYe73xOwvh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
                <br/>
                <img src="/images/projects/02_ganghwa_media/ganghwa_touch.png" alt="ganghwa_touch"/><br/>
                <img src="/images/projects/02_ganghwa_media/ganghwa_touch2.png" alt="ganghwa_touch2"/>
                <br/>
                <br/>
                <p className="font-bold text-2xl lg:text-[2.5em] text-white">설치예시</p>
                <br/>
                {/* pc ver. 흥미로운 인터랙티브 체험 이미지 */}
                <div className="lg:flex flex-wrap gap-5 hidden">
                    {
                        Array(4).fill().map((_, i) => {
                            return (
                                <img src={`/images/projects/02_ganghwa_media/ganghwa_experience${i + 1}.png`} alt={`experience${i + 1}`}
                                     className="w-[calc(50%-20px)]"/>
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
                                        <img src={`/images/projects/02_ganghwa_media/ganghwa_experience${i + 1}.png`}
                                             alt={`experience${i + 1}`}/>
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

export default ProjectDetail1;