import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="container px-4 px-lg-5 text-center">
        <h4>
          Thanks for visiting{" "}
          <span>
            <i className="fas fa-user-secret"></i>
          </span>
        </h4>
      </div>
    </section>
  );
};

export default Footer;
