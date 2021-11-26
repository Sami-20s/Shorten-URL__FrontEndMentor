import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
const FooterIcons = () => {
    return (
        <div className="footer__wrapper__icons">
            <a className="icon">
                <AiFillFacebook />
            </a>
            <a className="icon">
                <FaTwitter />
            </a>
            <a className="icon">
                <FaPinterest />
            </a>
            <a className="icon">
                <FaInstagram />
            </a>
        </div>
    );
};

export default FooterIcons;
