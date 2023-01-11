import { useState, useRef, useEffect } from "react";
import './styles/app.styles.scss';
import Home from "./components/home.component";
import Theme from "./components/theme.component";
import Overlay from "./components/overlay.component";
import SubContainer from "./components/subcontainer.component";

function App() {
  const [ showContainer, setShowContainer ] = useState("projects");
  const [ count, setCount ] = useState(1);
  const containerWindow = useRef();

  const scrollUp = () => { containerWindow.current.scrollTo({top: 0, behavior: "smooth"}); }

  useEffect(() => {
    if(count === 1) {
      setCount(2);
    } else {
      const offsetBottom = containerWindow.current.offsetTop + containerWindow.current.offsetHeight;
      containerWindow.current.scrollTo({top: offsetBottom, behavior: "smooth"})
    }
  },[showContainer]);

  return (
    <div className="container">
      <Overlay/>
      <Theme/>
      <Home showContainer={showContainer}/>
      <div className="scroll-container" ref={containerWindow}>
        <button className="info-btn" onClick={() => setShowContainer(showContainer === false ? "projects" : false)}>{showContainer === false ? 'Projects': 'Contact Information'}</button>
        <SubContainer showContainer={showContainer} scrollUp={scrollUp}/>
      </div>
    </div>
  );
}

export default App;
