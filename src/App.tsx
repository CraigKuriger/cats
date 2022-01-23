import { useState } from "react";
import Navbar from "./components/navigation/Navbar";
import "./App.scss";
import TabManager, { TAB_TYPES } from "./components/navigation/TabManager";

// React transitions for changing tab

function App() {
  const [activeTab, setActiveTab] = useState<TAB_TYPES>("home");

  return (
    <div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabManager activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
