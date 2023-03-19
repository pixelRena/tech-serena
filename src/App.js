import './styles/app.styles.scss';
import Home from "./components/home.component";
import Theme from "./components/theme.component";
import ParticlesContainer from "./components/particles-container.component";

function App() {
  return (
    <>
    <div className="container">
      <ParticlesContainer/>
      <Theme/>
      <Home/>
    </div>
    </>
  );
}

export default App;
