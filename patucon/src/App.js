import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
