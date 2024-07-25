import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <>
                <div
                    className="lg:flex hidden w-[1920px] justify-between px-[240px] absolute bottom-[384px] opacity-0">
                    <div className="basis-[304px] h-[44px] cursor-pointer"><Link to="/" className="text-center">zipshowkorea</Link>
                    </div>
                    <ul className="basis-[455px] h-[29px] flex justify-between items-center gap-x-[100px] text-center">
                        <li className="w-[70px] cursor-pointer"><Link to="/about">About</Link></li>
                        <li className="w-[94px] cursor-pointer"><Link to="/projects">Projects</Link></li>
                        <li className="w-[91px] cursor-pointer"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="lg:hidden block w-[360px] h-[728px] absolute bottom-0 opacity-0">
                    <ul className="pt-10 px-8">
                        <li className="mb-10 w-[168px] h-6 cursor-pointer"><Link to="/">zipshowkorea</Link></li>
                        <li className="mb-5 w-[52px] h-[29px] cursor-pointer"><Link to="/about" className="">About</Link></li>
                        <li className="mb-5 w-[70px] h-[29px] cursor-pointer"><Link to="/projects">Projects</Link></li>
                        <li className="w-[68px] h-[29px] cursor-pointer"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </>
        );
    }
}

Footer.propTypes = {};

export default Footer;