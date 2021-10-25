import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <p>Questions? Call 000-000-0000</p>
      <div className="footer__contents">
        <div className="footer__row">
          <p>FAQ</p>
          <p>Invester Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div className="footer__row">
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferenc</p>
          <p>Legal Notices</p>
        </div>
        <div className="footer__row">
          <p>Account</p>
          <p>Ways to Watch</p>
          <p>Corprate Information</p>
          <p>Netflix Originals</p>
        </div>
        <div className="footer__row">
          <p>Media Centre</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
      </div>
      <p>&copy; Sunil Rathod 2021</p>
    </div>
  );
}

export default Footer;
