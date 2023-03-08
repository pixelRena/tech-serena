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
    <>
    
    <div id="bgvideo">
      <video autoPlay playsInline muted loop>
        <source src="videos/vecteezy_old-damaged-film-texture-dust-speckles-and-noise_2016095.mp4" type="video/mp4"></source>
        <a href="https://www.vecteezy.com/video/2016095-old-damaged-film-with-noise">Old Damaged Film with Noise Stock Videos by Vecteezy</a>
      </video>
    </div>


    <div className="container">
      <Theme/>
      <Home showProjects={showProjects}/>
    </div>
    </>
  );
}

export default App;
