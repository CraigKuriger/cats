import { useState } from "react";
import Navbar from "./components/navigation/Navbar";
import "./App.scss";
import TabManager, { TAB_TYPES } from "./components/navigation/TabManager";
import Footer from "./components/navigation/Footer";

// React transitions for changing tab

function App() {
  const [activeTab, setActiveTab] = useState<TAB_TYPES>("home");

  const setActiveTabHandler = (tab: TAB_TYPES) => {
    setActiveTab(tab);
    //   Remove Bootrap mobile dropdown after when rendering (because no hyperlink is clicked)
    document.getElementById("navbarResponsive")?.classList.remove("show");
  };

  return (
    <div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTabHandler} />
      <TabManager activeTab={activeTab} setActiveTab={setActiveTabHandler} />
      <Footer />
    </div>
  );
}

export default App;
