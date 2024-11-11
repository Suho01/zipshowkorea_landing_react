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
                <img src="/images/projects/07_parksookeun3/parksookeun3_detail_bg.png" alt="projects_detail_bg"
                     className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">박수근미술관 개관20주년 특별전 &lt;그림책작가 김환영 원화전&gt; 미디어아트(마당을 나온 앎탉)</h1>
                <ul className="flex flex-wrap gap-y-2 gap-x-10 text-white pt-5 text-sm lg:text-base lg:pt-10 lg:pb-20">
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Client</p>
                        <span>강원 양구군립 박수근미술관</span>
                    </li>
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Date</p>
                        <span>2022.12</span>
                    </li>
                </ul>
                <br/>
                <iframe src="https://www.youtube.com/embed/0YMedDW9rd4?si=WskFYD64pWBTmOD6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
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
                박수근미술관 개관20주년 특별전<br/>
                &lt;그림책작가 김환영 원화전&gt; 미디어아트(마당을 나온 앎탉) <br/>
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                 김환영 작가는 10여 년 전 판매 부수 100만 부를 훨씬 넘긴 동화책 『마당을 나온 암탉(김환영 그림, 황선미 글), 사계절, 2002』의 원화 작가이며, <br/>
                 20여 년의 시간이 지나는 동안 수많은 국가에 번역 출간되었고 수차례에 걸쳐 영화 애니메이션으로 만들어지는 등<br/>
                 덕분에 세상에서 가장 유명한 닭이 된 ‘잎싹이 신화’를 만들어낸 그림책 작가입니다. <br/>
                 『마당을 나온 암탉』 원화 46점과 원화와 어우러진 음악과 함께 생동감 있게 재구성하여 제1 기획전시실에서 진행한 미디어아트입니다. <br/>

                 </span>
                <img src="/images/projects/07_parksookeun3/parksookeun3_img1.png" alt="parksookeun_img1"/> <br/>
                <img src="/images/projects/07_parksookeun3/parksookeun3_img2.png" alt="parksookeun_img2"/> <br/>
                <img src="/images/projects/07_parksookeun3/parksookeun3_img3.png" alt="parksookeun_img3"/> <br/>
                <img src="/images/projects/07_parksookeun3/parksookeun3_img4.png" alt="parksookeun_img4"/> <br/>
            </div>
            <br/>
            <br/>
            <div className="px-5 pb-10 lg:px-60 lg:pb-[200px]">
                <p className="font-bold text-2xl lg:text-[2.5em] text-white">인터랙티브 체험</p>
                <span
                    className="lg:text-lg text-[#f0f0f0] leading-6 lg:leading-8 block pt-5 pb-10 lg:pt-8 lg:pb-[60px]">
                    1. 활쏘기 그림 인터랙티브 - 관람객이 가까이 오면 영상속에 그림이 활을 쏜다.<br/>
                    2. 박수근'장남' - 관람객이 가까이 오면 졸고 있던 장남이 깨어난다.<br/>
                </span>
                <iframe src="https://www.youtube.com/embed/z92_0BNwoU0?si=6kdyDl5t47U282s_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
                <br/>
                <iframe src="https://www.youtube.com/embed/YZvupcbu-1g?si=tLEfHdm-_-wgmfty" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
                <br/>
                <br/>
                <p className="font-bold text-2xl lg:text-[2.5em] text-white">설치예시</p>
                <br/>
                {/* pc ver. 흥미로운 인터랙티브 체험 이미지 */}
                <div className="lg:flex flex-wrap gap-5 hidden">
                    {
                        Array(3).fill().map((_, i) => {
                            return (
                                <img src={`/images/projects/07_parksookeun3/parksookeun3_experience${i + 1}.jpg`} alt={`experience${i + 1}`}
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
                            Array(3).fill().map((_, i) => {
                                return (
                                    <SwiperSlide>
                                        <img src={`/images/projects/07_parksookeun3/parksookeun3_experience${i + 1}.jpg`}
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