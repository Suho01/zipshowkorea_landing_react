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
                <img src="/images/projects/06_parksookeun2/parksookeun2_detail_bg.png" alt="projects_detail_bg"
                     className="w-full h-[480px] lg:h-auto object-cover"/>
                <div className="bg-projects-detail-bg absolute bottom-0 left-0 w-full lg:h-80 h-[120px]"></div>
            </div>
            <div className="px-5 pt-10 pb-[60px] lg:px-60 lg:pt-[140px] lg:pb-60">
                <h1 className="font-bold text-2xl lg:text-[3.5em] text-white lg:leading-normal">박수근미술관 파빌리온 미디어파사드 1~4관</h1>
                <ul className="flex flex-wrap gap-y-2 gap-x-10 text-white pt-5 text-sm lg:text-base lg:pt-10 lg:pb-20">
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Client</p>
                        <span>강원 양구군립 박수근미술관</span>
                    </li>
                    <li className="flex gap-x-3">
                        <p className="text-[#666] w-10 lg:w-auto">Date</p>
                        <span>2021.02</span>
                    </li>
                </ul>
                <br/>
                <iframe src="https://www.youtube.com/embed/f3ATaysv0EA?si=dxfnznnw_-OerUsw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
                <br/>
                <iframe src="https://www.youtube.com/embed/BFCDIlKNr3c?si=gkhCFEgz0KffgK32" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-full aspect-[16/9]'></iframe>
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
                박수근미술관 파빌리온 미디어파사드 1~4관<br/>
                </p>
                <span
                    className="text-[#f0f0f0] lg:text-lg pt-5 lg:pt-8 pb-10 lg:pb-[60px] block leading-6 lg:leading-8">
                 제2시관 - 희망의 시간<br/>
                 박수근의 주요작품들이 벽면과 바닥에 맵핑되어 보여집니다.<br/>
                 공간에 요철을 줘서 입체감을 더해 관람객이 기대거나 앉아서 작품을 감상하는 공간으로 구성하였습니다.<br/>
                 4면을 가득 채운 프로젝션 맵핑으로 박수근 작품 속으로 들어온 듯한 느낌을 받을 수 있습니다.<br/>
                 관람객을 인식하여 반응하는 그림을 통해 작품속에 들어와 있는 듯한 경험을 선사합니다.<br/>
                 <br/>
                 <br/>
                 제3전시관 – 사랑과 이상<br/>
                 다양한 높낮이와 형태로 구성된 미로형 공간으로 박수근의 영감을 엿볼 수 있는 색다른 공간입니다. <br/>
                 유화 뿐만 아니라 수채화 드로잉 등 다양한 기법의 박수근의 그림들은 각자의 이야기를 하듯 살아 움직이며 <br/>
                 관람객들에게 끊임없이 말을 건넵니다.<br/>
                 박수근 작가의 과거 사진이 영사됩니. 그 위에 담은 글귀들이 다양한 모션 이펙트에 의해 움직여 새겨집니다.<br/>
                 그의 삶을 관통하는 메시지는 그의 그림을 감상하고 예술이 주는 카타르시스를 일으키는데 촉매작용을 합니다. <br/>
                 <br/>
                 <br/>
                 제4전시관 – 무한의 인연 <br/>
                 벽면부터 바닥까지 전체가 꽉 찬 미디어아트입니다. 벽부터 흐르는 물은 빨래터를 지나 꽃밭을 휘감는 냇가로 이어집니다. <br/>
                 빨래터의 아낙네 노랫소리와 방망이질은 타악기 소리처럼 찰진 소리를 만들어내고 빨래를 헹구는 소리는 현악기처럼 음율을 만들어냅니다.<br/>   
                </span>
                <img src="/images/projects/06_parksookeun2/parksookeun2_img3.png" alt="parksookeun_img3"/> <br/>
                <img src="/images/projects/06_parksookeun2/parksookeun2_img1.png" alt="parksookeun_img1"/> <br/>
                <img src="/images/projects/06_parksookeun2/parksookeun2_img2.png" alt="parksookeun_img2"/> <br/>
                <img src="/images/projects/06_parksookeun2/parksookeun2_img4.png" alt="parksookeun_img4"/> <br/>
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

            </div>
            {/*<ProjectDetailList/>*/}
            <Footer/>
        </div>
    );
}

export default ProjectDetail1;