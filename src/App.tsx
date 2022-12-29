import { useState } from "react";
import capacitorLogo from "./assets/capacitor.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://capacitorjs.com" target="_blank">
          <img src={capacitorLogo} className="logo" alt="Capacitor logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Capacitor + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
