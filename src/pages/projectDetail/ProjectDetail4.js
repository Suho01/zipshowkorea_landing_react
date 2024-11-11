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
                <img src="/images/projects/04_parksookeun1/parksookeun1_detail_bg.png" alt="parksookeun_detail_bg"
                     className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">박수근어린이미술관 (박수근의 그 시절, 사계) 미디어아트</h1>
                <ul className="flex flex-wrap gap-y-2 gap-x-10 text-white pt-5 text-sm lg:text-base lg:pt-10 lg:pb-20">
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Client</p>
                        <span>강원 양구군립 박수근미술관</span>
                    </li>
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Date</p>
                        <span>2023.01</span>
                    </li>
                </ul>
                <br/>
                <iframe src="https://www.youtube.com/embed/s2emPn4o2uA?si=d47UCYJgrL1nXwZv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
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
                    박수근 어린이 미술관 (박수근의 그 시절, 사계) 미디어아트<br/>
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                    (고향으로 돌아온 아기 업은 소녀) 그림의 내용은 그 당시 생활하는 사람들의 일상적 모습입니다.<br/>
                    빨래하는 여인들, 맷돌질하는 아낙, 나물 캐는 소녀들, 농악놀이 하는 사람들,<br/>
                    좌판을 깔고 장사하는 아주머니, 동생을 업고 있는 아이, 마을 어귀에 모여 대화하는 어르신들 등이 등장하며<br/>
                    인물들 곁에는 잎이 없는 나목(裸木)이 든든한 버팀목처럼 위풍당당 그려져 있는 공간을<br/>
                    봄, 여름, 가을, 겨울의 배경으로 표현하였습니다.
                    <br/>
                </span>
                <img src="/images/projects/04_parksookeun1/parksookeun1_img1.jpg" alt="parksookeun1_img1"/> <br/>
                <img src="/images/projects/04_parksookeun1/parksookeun1_img2.jpg" alt="parksookeun1_img2"/> <br/>
                <img src="/images/projects/04_parksookeun1/parksookeun1_img3.jpg" alt="parksookeun1_img3"/> <br/>
                <img src="/images/projects/04_parksookeun1/parksookeun1_img4.jpg" alt="parksookeun1_img4"/> <br/>
                <img src="/images/projects/04_parksookeun1/parksookeun1_img5.jpg" alt="parksookeun1_img5"/> <br/>
                <img src="/images/projects/04_parksookeun1/parksookeun1_img6.jpg" alt="parksookeun1_img6"/> <br/>
            </div>
            <br/>
            <br/>
            <div className="px-5 pb-10 lg:px-60 lg:pb-[200px]">
                <p className="font-bold text-2xl lg:text-[2.5em] text-white">박수근의 그 시절, 사계 인터랙티브</p>
                <span
                    className="lg:text-lg text-[#f0f0f0] leading-6 lg:leading-8 block pt-5 pb-10 lg:pt-8 lg:pb-[60px]">
                    스크린앞으로 가까이 가보세요. 인터랙티브 체험이 가능합니다. <br/>
                    
                </span>
                <iframe src="https://www.youtube.com/embed/b9Lri9agFss?si=iDNqI41m1YVgY_F6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
                <br/>
                <br/>
                <br/>
                <p className="font-bold text-2xl lg:text-[2.5em] text-white">설치사진</p>
                <br/>
                {/* pc ver. 흥미로운 인터랙티브 체험 이미지 */}
                <div className="lg:flex flex-wrap gap-5 hidden">
                    {
                        Array(4).fill().map((_, i) => {
                            return (
                                <img src={`/images/projects/04_parksookeun1/parksookeun1_experience${i + 1}.jpg`} alt={`experience${i + 1}`}
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
                                        <img src={`/images/projects/04_parksookeun1/parksookeun1_experience${i + 1}.jpg`}
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