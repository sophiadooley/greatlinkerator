import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from "./components/Title";
import LinksTable from "./components/LinksTable";

function App() {
  const [storedLinks, setStoredLinks] = useState([]);

  
  useEffect(() => {
    function Links() {
      const BASE_URL = '/api'
  
      const getLinks = async () => {
          const url = `${BASE_URL}/links`;
  
          const {data} = await axios.get(url);
  
          console.log("DATA: ", data);

          setStoredLinks(data.Links);
      }
      getLinks();
    };
  
    Links();

  }, [])

  return (
    <Router>
      <Title />
      <LinksTable 
        storedLinks={storedLinks}
        setStoredLinks={setStoredLinks}/>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
