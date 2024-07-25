import React, {Component} from 'react';
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import {Link} from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div className="lg:w-[1920px] w-[360px] relative">
                <Nav/>
                <img className="w-full lg:block hidden" src="/images/contact/4_contact_page.png" alt="4_contact_page"/>
                <img className="w-full block lg:hidden" src="/images/contact/4_contact_page_m.png" alt="4_contact_page_m"/>
                <div className="absolute top-[253px] left-5 lg:top-[383px] lg:left-[240px] cursor-pointer">
                    <Link to="/inquiry" className="block w-[155px] h-[39px] lg:w-[200px] lg:h-12"></Link>
                </div>
                <Footer/>
            </div>
        );
    }
}

Contact.propTypes = {};

export default Contact;