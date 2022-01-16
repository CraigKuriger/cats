import React from "react";
import classnames from "classnames";
import { TAB_TYPES } from "./TabManager";
import "./Navbar.scss";

const getLinkClass = (tab: TAB_TYPES, activeTab: TAB_TYPES) => {
  return classnames("nav-link", { "active-tab": tab === activeTab });
};

interface Props {
  activeTab: TAB_TYPES;
  setActiveTab: (activeTab: TAB_TYPES) => void;
}

const Navbar: React.FC<Props> = (props) => {
  const { activeTab, setActiveTab } = props;

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-3"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        <div className="navbar-brand" onClick={() => setActiveTab("home")}>
          <i className="fas fa-paw"></i>
          <span>&nbsp;CAT MAFIA</span>
        </div>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item" onClick={() => setActiveTab("categories")}>
              <div className={getLinkClass("categories", activeTab)}>
                Categories
              </div>
            </li>
            <li className="nav-item" onClick={() => setActiveTab("breeds")}>
              <div className={getLinkClass("breeds", activeTab)}>Breeds</div>
            </li>
            <li className="nav-item" onClick={() => setActiveTab("about")}>
              <div className={getLinkClass("about", activeTab)}>About</div>
            </li>
            <li className="nav-item" onClick={() => setActiveTab("contact")}>
              <div className={getLinkClass("contact", activeTab)}>Contact</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
