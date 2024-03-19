import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaSnapchat } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-brand">
            <h1>Whimsy</h1>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-about">
            <h4>ABOUT</h4>
            <p>about-1</p>
            <p>about-2</p>
          </div>
          <div className="footer-follow">
            <h4>FOLLOW US</h4>
            <p>Github</p>
            <p>Discord</p>
          </div>

          <div className="footer-legal">
            <h4>LEGAL</h4>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>

      <div className="footer-secondary">
        <div className="copyright-text">
          <p>©Whimsy</p>
        </div>
        <div className="social-media">
          <FaInstagram />
          <FaFacebook />
          <FaXTwitter />
          <FaGithub />
          <FaSnapchat />
        </div>
      </div>
    </div>
  );
};

export default Footer;
