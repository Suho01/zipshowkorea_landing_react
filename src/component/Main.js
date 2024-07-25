import React, {Component} from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import {Link} from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <div className="lg:w-[1920px] w-[360px] relative">
                <Nav/>
                <img className="w-full lg:block hidden" src="/images/main/0_main_page.png" alt="0_main_page"/>
                <img className="w-full block lg:hidden" src="/images/main/0_main_page_m.png" alt="0_main_page_m"/>
                <div className="absolute top-[1158px] lg:top-[2752px] lg:left-[90px] cursor-pointer">
                    <Link to="/about" className="block w-[360px] h-[804px] lg:w-[140px] lg:h-[37px]"></Link>
                </div>
                <div className="absolute top-[2177px] lg:top-[3284px] lg:right-[240px] cursor-pointer">
                    <Link to="/projects" className="block w-[360px] h-[2506px] lg:w-[152px] lg:h-[37px]"></Link>
                </div>
                <div className="absolute bottom-[768px] left-[102px] lg:bottom-[665px] lg:left-[240px] cursor-pointer">
                    <Link to="/inquiry" className="block w-[155px] h-[39px] lg:w-[200px] lg:h-[48px]"></Link>
                </div>
                <Footer/>
            </div>
        );
    }
}

Main.propTypes = {};

export default Main;