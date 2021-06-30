import React from "react";
import Visualizer from "./Visualizer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2 className="title">O (n log n)</h2>
      <h3 className="subtitle">~ a merge sort visualizer</h3>
      <Visualizer />
      <p className="info">
        * please wait till sorting finishes before clicking any buttons
      </p>
      <p className="footer-text">Made with ❤ & simplicity by Mohmed Ishak</p>
    </div>
  );
}

export default App;
