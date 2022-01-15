import React, { useEffect } from "react";
import "./TabManager.scss";

export type TAB_TYPES = "home" | "categories" | "breeds" | "about" | "contact";

interface Props {
  activeTab: TAB_TYPES;
}

const TabManager: React.FC<Props> = (props) => {
  const { activeTab } = props;

  useEffect(() => {
    //   Remove Bootrap mobile dropdown after when rendering (because no hyperlink is clicked)
    document.getElementById("navbarResponsive")?.classList.remove("show");
  });

  switch (activeTab) {
    case "categories":
      return (
        <div className="container px-4 px-lg-5 tab-manager">
          <h1 className="text-center">Categories</h1>
        </div>
      );
    case "breeds":
      return (
        <div className="container px-4 px-lg-5 tab-manager">
          <h1 className="text-center">Breeds</h1>
        </div>
      );
    case "about":
      return (
        <div className="container px-4 px-lg-5 tab-manager">
          <h1 className="text-center">About</h1>
        </div>
      );
    case "contact":
      return (
        <div className="container px-4 px-lg-5 tab-manager">
          <h1 className="text-center">Contact</h1>
        </div>
      );
    default:
      return (
        <div className="container px-4 px-lg-5 tab-manager">
          <h1 className="text-center">Categories</h1>
        </div>
      );
  }
};

export default TabManager;
