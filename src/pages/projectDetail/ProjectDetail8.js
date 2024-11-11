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
                <img src="/images/projects/08_ganghwa/ganghwa_detail_bg.png" alt="projects_detail_bg"
                     className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">강화 한겨례얼 미디어아트</h1>
                <ul className="flex flex-wrap gap-y-2 gap-x-10 text-white pt-5 text-sm lg:text-base lg:pt-10 lg:pb-20">
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Client</p>
                        <span>강화군청</span>
                    </li>
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Date</p>
                        <span>2022.05</span>
                    </li>
                </ul>
                <br/>
                <iframe src="https://www.youtube.com/embed/vL9agNEFxWU?si=FhiVy2ytByd0IU6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
                <br/>
                <iframe src="https://www.youtube.com/embed/sBWAV2onUDg?si=eCph-RfY2A4420Aa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
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
                강화 한겨례얼 미디어아트<br/>
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                 신화로 은둔된 우리의 역사<br/>
                 한겨레 얼, 고대 신화를 미디어아트로 만나다<br/>
                 <br/>
                 Part 01 신화의 섬<br/>
                 한겨레의 뿌리 - 오래된 역사의 흔적을 간직한 마니산을 모티브로 한 아트웍입니다.<br/>
                 신화는 상징의 언어에 속합니다. 어떤 유형의 신화는 스스로 그 다의성을 차단합니다.<br/>
                 다양한 의미의 흐름을 하나의 홈으로 수렴합니다.<br/>
                 수렴과 차단, 권력의 담론 등 신화로 은둔 된 우리역사.<br/>
                 동양의 정서와 고대 신화를 모티브 한 아트웍을 미디어아트로 표현하였습니다.<br/>
                 <br/>
                 Part 02 역사의 섬 - 아름다운 강화도의 명승명경 모습<br/>
                 침략하는 외척으로 부터 지켜낸 우리민족, 우리 문화를 모티브로한 아트웍입니다.<br/>
                 군사적 요충지, 왕과 왕족의 단골 유배지, 한반도<br/>
                 침탈의 출발점. 강화도는 아픔과 여망이 공존하는 역사의 섬.<br/>
                 섬의 나무는 달콤한 향기는 물밑 듯 밀어닥치는 외세 앞에서 굴복하지 않고 지키려 했던<br/>
                 투지와 노력의 흔적과 같이 아쉬운 역사를 환기시킵니다.

                 </span>
                <img src="/images/projects/08_ganghwa/ganghwa_img1.png" alt="ganghwa_img1"/> <br/>
                <img src="/images/projects/08_ganghwa/ganghwa_img2.png" alt="ganghwa_img2"/> <br/>
                <img src="/images/projects/08_ganghwa/ganghwa_img3.png" alt="ganghwa_img3"/> <br/>
                <img src="/images/projects/08_ganghwa/ganghwa_img4.png" alt="ganghwa_img4"/> <br/>
                <img src="/images/projects/08_ganghwa/ganghwa_img5.png" alt="ganghwa_img5"/> <br/>
                <img src="/images/projects/08_ganghwa/ganghwa_img9.png" alt="ganghwa_img9"/> <br/>
                <img src="/images/projects/08_ganghwa/ganghwa_img6.png" alt="ganghwa_img6"/> <br/>
                <img src="/images/projects/08_ganghwa/ganghwa_img7.png" alt="ganghwa_img7"/> <br/>
                <img src="/images/projects/08_ganghwa/ganghwa_img8.png" alt="ganghwa_img8"/> <br/>
            </div>

            <div className="px-5 pb-10 lg:px-60 lg:pb-[200px]">
            </div>
            {/*<ProjectDetailList/>*/}
            <Footer/>
        </div>
    );
}

export default ProjectDetail1;