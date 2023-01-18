import React from 'react';
import './Footer_style.css';
import facebook from './facebook.svg';
import instagram from './instagram.svg';


function Footer() {
    return (
        <div id="footer">
            <div className="social">
                <ul>
                    <li>We on social media</li>
                </ul>
                <a href="#"><img src={facebook} alt="facebook"/> </a>
                <a href="#"><img src={instagram} alt="instagram"/> </a>
            </div>
            <div className="list_footer">
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>
            <div className="list_footer">
                <ul>
                    <li><a href="#">Returns & Replacements</a></li>
                    <li><a href="#">Shipping and payment</a></li>
                    <li><a href="#">Credit</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
