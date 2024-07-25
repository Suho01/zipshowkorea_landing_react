import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";

class About extends Component {
    render() {
        return (
            <div className="lg:w-[1920px] w-[360px] relative">
                <Nav />
                <img className="w-full lg:block hidden" src="/images/about/1_about_page.png" alt="1_about_page"/>
                <img className="w-full block lg:hidden" src="/images/about/1_about_page_m.png" alt="1_about_page_m"/>
                <div>
                    <Link className="w-[178px] h-[39px] lg:w-[226px] lg:h-12 absolute cursor-pointer top-[1176px] right-[162px] lg:top-[1433px] lg:right-[634px] opacity-0" to='/projects'>프로젝트 보러가기</Link>
                </div>
                <Footer />
            </div>
        );
    }
}

About.propTypes = {};

export default About;