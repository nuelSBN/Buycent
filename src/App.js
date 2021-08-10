import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { productDetails } from "./components/items";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
