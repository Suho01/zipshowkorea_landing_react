import React, {useEffect, useState} from 'react';
import Nav from "../component/Nav";
import {Link, useLocation} from "react-router-dom";
import Footer from "../component/Footer";
import projectsData from '../data/projects.json';
import projectsDataEn from '../data/projects_en.json';
import {useTranslation} from "react-i18next";
import i18n from "i18next";

function Projects() {
    const { t } = useTranslation();
    const location = useLocation();
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(t('projects_menuList_1'));
    const [visibleCount, setVisibleCount] = useState(15); // 초기 표시 항목 수
    const [projectsToShow, setProjectsToShow] = useState([]);

    const menuList = [
        t('projects_menuList_1'), // "전체",
        t('projects_menuList_2'), // "디지털 미디어아트",
        "AR/VR",
        t('projects_menuList_4'), // "3D 스캔"
        t('projects_menuList_5'), // "웹&앱 개발"
        t('projects_menuList_6'), // "영상 제작"
    ];

    useEffect(() => {
        const loadProjectsData = async () => {
            const lang = i18n.language;
            const data = lang === 'en' ? projectsDataEn : projectsData;
            setProjects(data);
        };
        loadProjectsData();
        setActive(t('projects_menuList_1'));
    }, [i18n.language]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const filter = params.get('filter');

        if (filter && menuList.includes(filter)) {
            setActive(filter);
        } else {
            setActive(t('projects_menuList_1'));
        }
    }, [location.search]);

    useEffect(() => {
        const filteredProjects = active === t('projects_menuList_1')
            ? projects
            : projects.filter(project => project.category === active);
        setProjectsToShow(filteredProjects.slice(0, visibleCount));
    }, [active, visibleCount, projects]);

    const clickActive = (category) => {
        setActive(category);
        setVisibleCount(15);
    };

    const loadMoreProjects = () => {
        setVisibleCount(prevCount => prevCount + 3);
    };

    const filteredProjectsCount = active === t('projects_menuList_1')
        ? projects.length
        : projects.filter(project => project.category === active).length;
    return (
        <div className="relative bg-[#111]">
            <Nav/>
            <div className="pt-20 px-5 lg:pt-[180px] lg:mx-auto">
                <h1 className="font-bold text-2xl lg:text-[3.5em] lg:text-center text-white">Projects</h1>
            </div>
            <div
                className="overflow-x-auto touch-pan-x scrollbar-hidden px-5 pt-4 pb-6 lg:pt-12 lg:pb-[60px] lg:overflow-x-hidden lg:touch-none">
                <ul className={`gap-x-4 lg:gap-x-9 lg:text-xl text-[#ccc] lg:text-center lg:justify-center whitespace-nowrap ${i18n.language === 'kr' ? 'flex' : 'hidden'}`}>
                    {
                        menuList.map((e, i) => {
                            return (
                                <li key={i} onClick={() => clickActive(e)}
                                    className={`cursor-pointer ${active === e ? 'activeList' : ''} last:pr-5`}>{e}</li>
                            );
                        })
                    }
                </ul>
                <ul className={`gap-x-4 lg:gap-x-9 lg:text-xl text-[#ccc] lg:text-center lg:justify-center whitespace-nowrap ${i18n.language === 'en' ? 'flex' : 'hidden'}`}>
                    {
                        menuList.map((e, i) => {
                            return (
                                <li key={i} onClick={() => clickActive(e)}
                                    className={`cursor-pointer ${active === e ? 'activeList' : ''} last:pr-5`}>{e}</li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className="w-full flex flex-wrap gap-1 lg:gap-[3px] relative">
                <div className="lg:hidden absolute bg-projects-list-bg right-0 -top-12 w-5 h-9 z-10"></div>
                <div className="lg:hidden absolute bg-projects-list-bg left-0 -top-12 w-5 h-9 z-10 rotate-180"></div>
                {
                    projectsToShow.map((project, i) => (
                        <Link to="/projects_detail" key={i} className="lg:w-[calc(33.33%-3px)] relative cursor-pointer
                                after:absolute after:bg-black/70 after:w-full after:h-full after:left-0 after:top-0 after:hidden hover:after:block group">
                            <img src={project.img} alt={`projects_${i + 1}`}/>
                            <p className="text-white lg:text-xl font-bold absolute bottom-5 left-5 z-[1]">{project.detail}</p>
                            <div className="w-full h-20 bg-projects-p-gradient absolute bottom-0 left-0"></div>
                            <div
                                  className="w-[100px] h-[100px] border-2 border-[#e0474b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full font-bold text-sm text-[#e0474b] text-center flex-col justify-center items-center gap-y-[10px] hidden group-hover:flex">
                                <img src="/images/main/plus.svg" alt="plus" className="w-4"/>
                                <p>{/*자세히 보기*/}{t('main_ourService_detailBtn')}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            {
                filteredProjectsCount > visibleCount && (
                    <div className="w-full pt-[60px] pb-[140px]">
                        <button
                            onClick={loadMoreProjects}
                            className="cursor-pointer border border-[#666] rounded-full px-5 py-[10px] lg:px-7 lg:py-3 mx-auto flex items-center gap-x-3">
                            <p className="lg:text-xl text-[#ccc]">{/*더 보기*/}{t('projects_more_button')}</p>
                            <img src="/images/projects/arrow.svg" alt="arrow"/>
                        </button>
                    </div>
                )
            }
            <Footer/>
        </div>
    );
}

Projects.propTypes = {};

export default Projects;