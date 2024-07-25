import React, {Component} from 'react';
import Nav from "../component/Nav";
import Footer from "../component/Footer";

class Projects extends Component {
    render() {
        return (
            <div className="lg:w-[1920px] w-[360px] relative">
                <Nav />
                <img className="w-full lg:block hidden" src="/images/projects/3_projects_detail_page.png" alt="3_projects_detail_page"/>
                <img className="w-full block lg:hidden" src="/images/projects/3_projects_detail_page_m.png" alt="3_projects_detail_page_m"/>
                <Footer />
            </div>
        );
    }
}

Projects.propTypes = {};

export default Projects;