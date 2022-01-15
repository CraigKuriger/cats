import { useEffect, useState } from "react";
import Navbar from "./components/navigation/Navbar";
import "./App.scss";
import axios from "axios";
import TabManager, { TAB_TYPES } from "./components/navigation/TabManager";

// TODO: State for tab
// React transitions for changing tab

function App() {
  const baseURL = "https://api.thecatapi.com/v1/";

  const [activeTab, setActiveTab] = useState<TAB_TYPES>("home");

  useEffect(() => {
    axios.get(baseURL + "categories", {}).then((response) => {
      console.debug("Response", response.data);
    });
    axios.get(baseURL + "breeds", {}).then((response) => {
      console.debug("Response", response.data);
    });
  }, []);

  return (
    <div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabManager activeTab={activeTab} />
    </div>
  );
}

export default App;
