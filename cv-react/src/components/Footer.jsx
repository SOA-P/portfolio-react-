import React from "react";
import "./FooterStyles.css";
import {
    FaHome,
    FaPhone,
    FaMailBulk,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="location">
                    <div className="left">
                        <FaHome size={40} style={{ color: "#fff", marginRight: "1rem" }} />{" "}
                        <div>
                            <p>Student Wild Code School</p>
                            <p>France. Lille</p>
                        </div>
                        <div className="phone">
                            <h4>
                                <FaPhone
                                    size={20}
                                    style={{ color: "#fff", marginRight: "1rem" }}
                                />{" "}
                                <p>07.49.70.48.47</p>
                            </h4>
                        </div>
                        <div className="email">
                            <h4>
                                <FaMailBulk
                                    size={20}
                                    style={{ color: "#fff", marginRight: "1rem" }}
                                />{" "}
                                <p> amajoudnedev@gmail.com</p>
                            </h4>
                        </div>
                    </div>
                    <div className="right">
                        <h4> About the compagny</h4>
                        <p>It's a great school to learn the digital professions</p>
                        <div className="social">
                            <FaFacebook
                                size={30}
                                style={{ color: "#fff", marginRight: "1rem" }}
                            />
                            <FaInstagram
                                size={30}
                                style={{ color: "#fff", marginRight: "1rem" }}
                            />
                            <FaLinkedin
                                size={30}
                                style={{ color: "#fff", marginRight: "1rem" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
