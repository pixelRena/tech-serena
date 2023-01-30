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
              <Button>All Projects</Button>
              <Button>HTML</Button>
              <Button>React</Button>
            </div>
            <div className="btn-items">
              <Button additionalClasses={"active"} onClick={() => setShowProjects(!showProjects)}>{showProjects ? 'Contact Information': 'View Projects'}</Button>
            </div>
          </div>
          {showProjects ? 
          <Projects showProjects={showProjects} setShowProjects={setShowProjects}/> 
          :
          <Info/>
          }
        </div> 
      </div>
    </div>
  );
}

export default App;
