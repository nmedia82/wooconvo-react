import { useState, useEffect } from "react";
import "./App.css";
import { getAdminMeta } from "./common/modalService";
import Admin from "./pages/Admin";

window.WOOCONVO_API_URL = "https://code.najeebmedia.com/wp-json/wooconvo/v1";

function App() {
  const [Meta, setMeta] = useState([]);
  useEffect(() => {
    const loadData = async (params) => {
      var { data: meta } = await getAdminMeta();

      setMeta(meta);
    };
    loadData();
  }, []);
  return (
    <div className="wooconvo-admin-wrapper">
      <Admin />
    </div>
  );
}

export default App;
