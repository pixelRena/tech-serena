import './styles/app.styles.scss';
import Home from "./components/home.component";
import Theme from "./components/theme.component";
import Overlay from "./components/overlay.component";

function App() {
  return (
    <div className="container">
      <Overlay/>
      <Theme/>
      <Home/>
    </div>
  );
}

export default App;
