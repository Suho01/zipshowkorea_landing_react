import React from 'react';
import {Link} from "react-router-dom";

function ProjectDetailList() {
    return (
        <div className="w-full">
            {/* <img src="/images/projects/projects_detail_image3.png" alt="projects_detail_image3"/> */}
            <Link to="/projects"
                  className="w-full border-t border-b border-[#333] flex items-center gap-x-3 px-5 py-[16px] lg:px-60 lg:py-5 mt-[100px]">
                <img src="/images/projects/list.svg" alt="list"/>
                <p className="lg:text-lg text-white">프로젝트 목록</p>
            </Link>
            <div className="flex justify-between px-5 pt-5 pb-20 lg:px-60 lg:pt-10 lg:pb-[140px]">
                <Link to="/projects_detail1">
                    <div className="flex gap-x-3 items-center pb-5 justify-start">
                        <img src="/images/projects/arrow_left.svg" alt="arrow_left"/>
                        <p className="lg:text-lg text-[#666]">이전 프로젝트</p>
                    </div>
                    <div className="hidden lg:block text-2xl font-bold text-white">박수근미술관 미디어아트 '사계'</div>
                </Link>
                <Link to="/projects_detail2">
                    <div className="flex gap-x-3 items-center pb-5 justify-end">
                        <p className="lg:text-lg text-[#666]">다음 프로젝트</p>
                        <img src="/images/projects/arrow_right.svg" alt="arrow_right"/>
                    </div>
                    <div className="hidden lg:block text-2xl font-bold text-white">함안박물관 애니메이션 '아라가야의 정수'</div>
                </Link>
            </div>
        </div>
    );
}

export default ProjectDetailList;