import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";
import UploadFiles from "./components/upload-files.component";
import resets from './components/_resets.module.css';
import classes from './App.module.css';
import { UsersAskingQState2 } from './components/UsersAskingQState2/UsersAskingQState2';
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          Walnuss
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              List Jobs
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Job
            </Link>
          </li>
        </div>
      </nav>
      <div className={`${resets.storybrainResets} ${classes.root}`}>
        <UsersAskingQState2 />
      </div>
      <div className="container" style={{ width: "600px" }}>
        <div style={{ margin: "20px 0" }}>
          <h3>Job Description</h3>
          <h4>Drag & Drop JD File</h4>
        </div>

        <UploadFiles />
      </div>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<TutorialsList/>} />
          <Route path="/tutorials" element={<TutorialsList/>} />
          <Route path="/add" element={<AddTutorial/>} />
          <Route path="/tutorials/:id" element={<Tutorial/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
