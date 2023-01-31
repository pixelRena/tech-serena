import { useState, useEffect } from "react";
import './styles/app.styles.scss';
import Home from "./components/home.component";
import Theme from "./components/theme.component";
import Overlay from "./components/overlay.component";
import Projects from "./components/projects.component";
import Button from "./components/button.component";
import Info from "./components/info.component";

function App() {
  const [ showProjects, setShowProjects ] = useState(true);
  const [ showTypeOfProjects, setShowTypeOfProjects ] = useState("all");

  useEffect(() => {
  },[showProjects]);

  return (
    <div className="container">
      <Overlay/>
      <Theme/>
      <Home showProjects={showProjects}/>
      <div className="scroll-container">
        <div className="subcontainer">
          <div className="btn-group">
            <div className="btn-items">
              <Button additionalClasses={showTypeOfProjects === "all" && "active"} onClick={() => setShowTypeOfProjects("all")} hidden={!showProjects}>All Projects</Button>
              <Button additionalClasses={showTypeOfProjects === "html" && "active"} onClick={() => setShowTypeOfProjects("html")} hidden={!showProjects}>HTML</Button>
              <Button additionalClasses={showTypeOfProjects === "react" && "active"} onClick={() => setShowTypeOfProjects("react")} hidden={!showProjects}>React</Button>
            </div>
            <div className="btn-items">
              <Button additionalClasses={"active"} onClick={() => setShowProjects(!showProjects)}>{showProjects ? 'Contact Information': 'View Projects'}</Button>
            </div>
          </div>
          {showProjects ? 
          <>
          <div className="text-info">Click the "+" for more information</div>
          <Projects showTypeOfProjects={showTypeOfProjects}/> 
          </>
          :
          <Info/>
          }
        </div> 
      </div>
    </div>
  );
}

export default App;
