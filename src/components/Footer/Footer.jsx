import React from 'react';
import './Footer.css'; // Import your custom CSS for styling

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="container p-4">
        <section id="images-section">
          {/* Your image cards */}
        </section>
      </div>
      <div className="footer-copyright text-center p-3">
        © 2023 Web dev Adi
        <span>+91 9398895448</span>&nbsp;&nbsp;&nbsp;
        <span>akumatha@gmail.com</span>
      </div>
    </footer>
  );
};

export default Footer;
