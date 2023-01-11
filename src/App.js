import './styles/app.styles.scss';
import Home from "./components/home.component";
import Theme from "./components/theme.component";
import Overlay from "./components/overlay.component";
import SubContainer from "./components/subcontainer.component";
import {BsArrowUp} from 'react-icons/bs';

function App() {
  return (
    <div className="container">
      <Overlay/>
      <Theme/>
      <Home/>
      <div className="scroll-container">
        <button className="info-btn">Contact Information</button>
        <SubContainer/>
        {/* <button className="back-to-top-btn" onClick={() => window.scrollTo(0,0)}><BsArrowUp size={24}/></button> */}
      </div>
    </div>
  );
}

export default App;
