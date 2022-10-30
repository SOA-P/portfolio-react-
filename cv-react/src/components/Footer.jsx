import React from "react";
import "./FooterStyles.css";
import { FaHome, FaPhone ,FaMailBulk } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Student Wild Code School</p>
              <p>France. Lille</p>
            </div>
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                /> 07.49.70.48.47
              </h4>
            </div>
            <div className="mail">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />amajoudnedev@gmail.com
              </h4>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
