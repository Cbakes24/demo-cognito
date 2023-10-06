import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsmobile from "./aws-exports.js";
import { Route, Routes } from "react-router-dom";
import Public from "./pages/Public";
import Protected from "./pages/Protected";
import Profile from "./pages/Profile";
import Nav from "./pages/Nav";
Amplify.configure(awsmobile);

ReactDOM.render(<Router />, document.getElementById("root"));
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route exact path="/public" element={<Public />} />
          <Route exact path="/profile" element={<Profile />} />{" "}
          <Route exact path="/protected" element={<Protected />} />{" "}
        </Routes>
      </header>
    </div>
  );
}

export default App;
