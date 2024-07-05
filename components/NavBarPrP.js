// src/components/NavBar.js
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './NavBarRes.css';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NavBarRes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onServicesTextClick = useCallback(() => {
    navigate("/contactUs");
  }, [navigate]);

  const onServicesText1Click = useCallback(() => {
    navigate("/servicesp");
  }, [navigate]);

  const onProjectsTextClick = useCallback(() => {
    navigate("/projectsp");
  }, [navigate]);

  const onServicesText2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img onClick={onServicesText2Click} className="navbar-logo" src="logoS2.png" />
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a  className="nav-links" onClick={onServicesText2Click}>Home</a>
          </li>
          <li className="nav-item">
            <a  className="nav-links" onClick={onServicesText1Click}>Services</a>
          </li>
          <li className="nav-item">
            <a className="active" onClick={onProjectsTextClick}>Projects</a>
          </li>

          <li className="nav-item">
            <a  className="nav-links" onClick={onServicesTextClick}>ContactUs</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarRes;
