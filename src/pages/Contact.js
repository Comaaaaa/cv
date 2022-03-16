import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      ={" "}
      <div className="contactData">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Paris</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0609754597">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("N° de téléphone copié");
                  }}
                >
                  06 09 75 45 97
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="sofianebassaler@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Mail copié");
                  }}
                >
                  sofianebassaler@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
