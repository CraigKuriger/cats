import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="container px-4 px-lg-5 text-center">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <a
                href="mailto:craig.kuriger@icloud.com"
                className="text-muted text-decoration-none"
              >
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                &nbsp; info@thecatmafia.com
              </a>
            </h4>
          </div>
          <div className="col-md-6">
            <h4>
              <a
                href="tel:+64272721285"
                className="text-muted text-decoration-none"
              >
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                &nbsp; 0800 CAT MAFIA
              </a>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
