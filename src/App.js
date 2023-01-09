import './styles/app.styles.scss';
import Home from "./components/home.component";
import Theme from "./components/theme.component";

function App() {
  return (
    <div className="container">
      <Theme/>
      <Home/>
    </div>
  );
}

export default App;
