import React, {Component} from 'react';
import Nav from "../component/Nav";
import {Link} from "react-router-dom";
import Footer from "../component/Footer";

class Projects extends Component {
    render() {
        return (
            <div className="lg:w-[1920px] w-[360px] relative">
                <Nav />
                <img className="w-full lg:block hidden" src="/images/projects/2_projects_list_page.png" alt="2_projects_list_page"/>
                <img className="w-full block lg:hidden" src="/images/projects/2_projects_list_page_m.png" alt="2_projects_list_page_m"/>
                <div>
                    <Link to="/projects_detail" className="bg-white w-full h-[2523px] lg:h-[1807px] absolute top-[242px] lg:top-[363px] opacity-0"></Link>
                </div>
                <Footer />
            </div>
        );
    }
}

Projects.propTypes = {};

export default Projects;