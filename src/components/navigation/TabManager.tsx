import React, { useEffect } from "react";
import About from "../pages/About";
import Breeds from "../pages/Breeds";
import Categories from "../pages/Categories";
import Gallery from "../pages/Gallery";
import Landing from "../pages/Landing";
import "./TabManager.scss";

const TabWrapper: React.FC = (props) => {
  return <div className="tab-wrapper">{props.children}</div>;
};

export type TAB_TYPES = "home" | "gallery" | "categories" | "breeds" | "about";

interface Props {
  activeTab: TAB_TYPES;
  setActiveTab: (activeTab: TAB_TYPES) => void;
}

const TabManager: React.FC<Props> = (props) => {
  const { activeTab, setActiveTab } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  switch (activeTab) {
    case "gallery":
      return (
        <TabWrapper>
          <Gallery />
        </TabWrapper>
      );
    case "categories":
      return (
        <TabWrapper>
          <Categories />
        </TabWrapper>
      );
    case "breeds":
      return (
        <TabWrapper>
          <Breeds />
        </TabWrapper>
      );
    case "about":
      return (
        <TabWrapper>
          <About />
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
