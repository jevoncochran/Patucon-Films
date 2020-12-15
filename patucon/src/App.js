import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
