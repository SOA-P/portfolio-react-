import React from "react";
import Typical from "react-typical";
import "./Profile.css";


const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/SOA-P">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/n%C3%A9dim-amajoud-322154246/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/nedim.a_/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="profil-details-name">
            <span className="primary-text">
              {" "}
              Hello , I'M <span className="highligthed-text">Nédim</span>
            </span>
          </div>
        </div>
        <div className="profile-details-role">
          <span className="primary-text">
            {" "}
            <h1>
              {" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Magical Dev 🧙🏽‍♂️",
                  1000,
                  "FullStack Developper💻",
                  500,
                  "React.Js Developper 📱",
                  0,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
              knack of building application with front and back en operations.
            </span>
          </span>
        </div>
        <div className="profile-options">
          <button className="btn primary-btn">
            {""}
            Hire me{" "}
          </button>
          <a
            href="/src/PortofolioContainer/Home/amajoud.pdf"
            download="amajoud.pdf"
          >
            <button className="btn highlighted-btn">Get RESUME</button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className=" profile-picture-background"></div>
      </div>
    </div>
  );
};

export default Profile;
