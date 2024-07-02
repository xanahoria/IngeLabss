
import React from 'react';
import logo from '../.././LOGO 1 EN BLANCO.png';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="Footer">
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <img src={logo} className="footer-logo" alt="logo" />
            <p>aea.</p>
          </div>
          <div className="footer-center">
            <h3>Horario de atención</h3>
            <p>De Lunes a sábado<br />8:00 - 20:00 h</p>
            <p><a href="mailto:ingelabs@gmail.com" className="footer-email">ingelabs@gmail.com</a></p>
          </div>
          <div className="footer-right">
            <h3>Síguenos</h3>
            <div className="footer-social-icons">
              <FaInstagram />
              <FaFacebook />
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>All Rights Reserved © 2024 - Inge Lab</p>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background-color: #1e2a3a;
          color: #fff;
          padding: 10px 0;
          bottom: 0;
          width: 100%;
        }
        
        .footer-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 10px;
        }
        
        .footer-left, .footer-center, .footer-right {
          flex: 1;
          text-align: center;
          color: #f8f8f8;
        }
        
        .footer-logo {
          height: 80px;
          margin-bottom: 5px; 
        }
        
        .footer-center h3, .footer-right h3 {
          color: #0f0;
          font-size: 16px;
        }
        
        .footer-social-icons {
          display: flex;
          justify-content: center;
          margin-top: 5px;
        }
        
        .footer-social-icons svg {
          margin: 0 5px;
          font-size: 30px;
          cursor: pointer;
        }
        
        .footer-bottom {
          text-align: center;
          padding-top: 5px;
          border-top: 1px solid #444;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
}

export default Footer;
