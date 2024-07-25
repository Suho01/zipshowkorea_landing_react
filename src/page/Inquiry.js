import React, {Component} from 'react';
import Nav from "../component/Nav";
import Footer from "../component/Footer";

class Contact extends Component {
    render() {
        return (
            <div className="lg:w-[1920px] w-[360px] relative">
                <Nav/>
                <img className="w-full lg:block hidden" src="/images/inquiry/5_inquiry_page.png" alt="5_inquiry_page"/>
                <img className="w-full block lg:hidden" src="/images/inquiry/5_inquiry_page_m.png" alt="5_inquiry_page_m"/>
                <Footer />
            </div>
        );
    }
}

Contact.propTypes = {};

export default Contact;