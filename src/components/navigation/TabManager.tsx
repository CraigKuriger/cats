import React from "react";
import Breeds from "../pages/Breeds";
import Categories from "../pages/Categories";
import Gallery from "../pages/Gallery";
import Landing from "../pages/Landing";
import "./TabManager.scss";

const TabWrapper: React.FC = (props) => {
  return <div className="tab-wrapper">{props.children}</div>;
};

export type TAB_TYPES =
  | "home"
  | "gallery"
  | "categories"
  | "breeds"
  | "about"
  | "contact";

interface Props {
  activeTab: TAB_TYPES;
  setActiveTab: (activeTab: TAB_TYPES) => void;
}

const TabManager: React.FC<Props> = (props) => {
  const { activeTab, setActiveTab } = props;

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
