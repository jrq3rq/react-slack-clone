import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  // BEM naming convention
  return (
    <div className="App">
      <h1>Slack-Clone</h1>
      {/* header  */}
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* react-router -> chat screen */}
      </div>
    </div>
  );
}

export default App;
