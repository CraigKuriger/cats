import React, { useEffect } from "react";
import Categories from "../pages/Categories";
import Landing from "../pages/Landing";
import "./TabManager.scss";

const TabWrapper: React.FC = (props) => {
  return <div className="tab-wrapper">{props.children}</div>;
};

export type TAB_TYPES = "home" | "categories" | "breeds" | "about" | "contact";

interface Props {
  activeTab: TAB_TYPES;
  setActiveTab: (activeTab: TAB_TYPES) => void;
}

const TabManager: React.FC<Props> = (props) => {
  const { activeTab, setActiveTab } = props;

  useEffect(() => {
    //   Remove Bootrap mobile dropdown after when rendering (because no hyperlink is clicked)
    document.getElementById("navbarResponsive")?.classList.remove("show");
  });

  switch (activeTab) {
    case "categories":
      return (
        <TabWrapper>
          <Categories />
        </TabWrapper>
      );
    case "breeds":
      return (
        <TabWrapper>
          <h1 className="text-center">Breeds</h1>
        </TabWrapper>
      );
    case "about":
      return (
        <TabWrapper>
          <h1 className="text-center">About</h1>
        </TabWrapper>
      );
    case "contact":
      return (
        <TabWrapper>
          <h1 className="text-center">Contact</h1>
        </TabWrapper>
      );
    default:
      return (
        <TabWrapper>
          <Landing setActiveTab={setActiveTab} />
        </TabWrapper>
      );
  }
};

export default TabManager;
