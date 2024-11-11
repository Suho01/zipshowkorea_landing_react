import React from 'react';
import Nav from "../../component/Nav";
import {Swiper, SwiperSlide} from "swiper/react";
import Footer from "../../component/Footer";

function Arvr() {
    return (
        <div className="relative bg-[#111]">
            <Nav/>
            <div className="relative">
                <img src="/images/projects/01_munja/munja_detail_bg.png" alt="projects_detail_bg"
                     className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
                <p className="absolute font-bold text-5xl lg:text-9xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">AR/VR</p>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">국립세계문자박물관 AI 미디어아트</h1>
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
                <iframe src="https://www.youtube.com/embed/eHmQOP8r0-8?si=sJKtDhCXFPE3jIcM" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                        className='w-full aspect-[16/9]'></iframe>
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
                    생활SOC(국립세계문자박물관)기반 실감콘텐츠체험존 구축 용역 AI미디어아트<br/>
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                    현재는 불가능하지만 사람들이 간절히 바라는 것, <br/>
                    상상속의 미래에는 이뤄질 수 있는 것들을 AI미디어아트로 제작합니다.<br/>
                    키오스크를 통해 미래의 문자에게 바라는 점을 작성하면<br/>
                    AI가 분석하여 상상만 했던 것을 시각적으로 감상할 수 있도록 만들어줍니다.
                </span>
                <img src="/images/projects/01_munja/munja_kiosk.png" alt="munja_kiosk"/> <br/>
                <img src="/images/projects/01_munja/munja_img5.png" alt="munja_wide_image1"/> <br/>
                <img src="/images/projects/01_munja/munja_img6.png" alt="munja_wide_image1"/> <br/>
                <img src="/images/projects/01_munja/munja_img7.png" alt="munja_wide_image1"/> <br/>
                <img src="/images/projects/01_munja/munja_img8.png" alt="munja_wide_image1"/> <br/>
                <img src="/images/projects/01_munja/munja_img1.png" alt="munja_image1"/> <br/>
                <img src="/images/projects/01_munja/munja_img2.png" alt="munja_image2"/> <br/>
                <img src="/images/projects/01_munja/munja_img3.png" alt="munja_image2"/>
            </div>
            <br/>
            <br/>
            <div className="px-5 pb-10 lg:px-60 lg:pb-[200px]">
                <p className="font-bold text-2xl lg:text-[2.5em] text-white">흥미로운 인터랙티브 체험</p>
                <span
                    className="lg:text-lg text-[#f0f0f0] leading-6 lg:leading-8 block pt-5 pb-10 lg:pt-8 lg:pb-[60px]">
                    관람객이 가까이ㅣ 다가서면 코드가 불규칙하게 쓰여지고 관람객이 멀어지면 코드가 점점 사라진다. <br/>

                </span>
                <iframe src="https://www.youtube.com/embed/Lhado5b408c?si=-tT1Ulhe4FHu3Mj9" title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                        className='w-full aspect-[16/9]'></iframe>
                <br/>
                <img src="/images/projects/01_munja/munja_img3.png" alt="munja_image2"/>
                <br/>
                <br/>
                <p className="font-bold text-2xl lg:text-[2.5em] text-white">설치예시</p>
                <br/>
                {/* pc ver. 흥미로운 인터랙티브 체험 이미지 */}
                <div className="lg:flex flex-wrap gap-5 hidden">
                    {
                        Array(4).fill().map((_, i) => {
                            return (
                                <img src={`/images/projects/01_munja/munja_experience${i + 1}.png`}
                                     alt={`experience${i + 1}`}
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
                                        <img src={`/images/projects/01_munja/munja_experience${i + 1}.png`}
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

export default Arvr;