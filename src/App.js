import { useState, useEffect } from "react";
import "./App.css";
import { getAdminMeta } from "./common/modalService";
import Admin from "./pages/Admin";
import Admin_react from './pages/Admin_React';

window.WOOCONVO_API_URL = "https://code.najeebmedia.com/wp-json/wooconvo/v1";

function App() {
  const [Meta, setMeta] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      var { data: meta } = await getAdminMeta();
      const { success, data } = meta;
      if (!success) return alert("Error while loading admin settings");
      console.log(JSON.parse(data));
      setMeta(JSON.parse(data));
    };
    loadData();
  }, []);
  return (
    <div className="wooconvo-admin-wrapper">
      {/* <Admin Meta={Meta} /> */}
      <Admin_react />
    </div>
  );
}

export default App;
