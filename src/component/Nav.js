import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <>
                <div className="lg:flex hidden w-[1920px] h-20 justify-between items-center px-[60px] absolute opacity-0">
                    <div className="basis-[140px] cursor-pointer"><Link to="/" className="text-center">zipshowkorea</Link>
                    </div>
                    <ul className="basis-[420px] flex justify-between items-center gap-x-12 text-center">
                        <li className="w-11 cursor-pointer"><Link to="/about">About</Link></li>
                        <li className="w-[59px] cursor-pointer"><Link to="/projects">Projects</Link></li>
                        <li className="w-[57px] cursor-pointer"><Link to="/contact">Contact</Link></li>
                        <li className="w-[116px] cursor-pointer"><Link to="/inquiry">프로젝트 문의</Link></li>
                    </ul>
                </div>
                <div>
                    <Link to="/" className="lg:hidden block absolute w-[113px] h-4 top-[22px] left-5 bg-white cursor-pointer opacity-0"></Link>
                </div>
            </>
        );
    }
}

Nav.propTypes = {};

export default Nav;