import React from "react";
import "./App.css";
import Login from "./component/Login";
import CreateTask from "./component/CreateTask";
import Task from "./component/Task";

function App() {
  return (
    <div className="main-app">
      <h2>Task Manager</h2>
      <hr />
      <Login />
      <hr />
      <CreateTask />
      <br />
      <Task />
    </div>
  );
}

export default App;
