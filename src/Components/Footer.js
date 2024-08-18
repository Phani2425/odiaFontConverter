import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
            <div className="contact-text">
        <p>Contact Us for More Information</p>
      </div>
      <div className="map-and-info">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.9100598567984!2d85.83400367490715!3d20.262564513653786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a74668e827cb%3A0xab564a194f8215ee!2sUnnati%20Pathe!5e0!3m2!1sen!2sin!4v1723908694162!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            className="map-iframe"
            title="Unnatipathe Location"
          ></iframe>
        </div>
        <div className="info-box">
          <h3>Unnatipathe</h3>
          <p>VA-20/4, UNIT-2,<br />BHUBANESWAR- 751009,<br />ODISHA</p>
          <p>Ph: 0674-2531344 / 9437309009</p>
          <p>Email: <a href="mailto:unnatipathe@gmail.com">unnatipathe@gmail.com</a></p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
