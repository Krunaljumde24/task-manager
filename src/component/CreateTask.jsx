import React from "react";
import "../App.css";
function CreateTask() {
  return (
    <div>
      <div className="create-task-form">
        <p>
          <b>
            Welcome, <i>Username</i>
          </b>
        </p>
        <form>
          <div class="mb-3">
            <label for="taskInput" class="form-label">
              <b>Enter Task</b>
            </label>
            <input
              type="text"
              class="form-control"
              id="taskInput"
              placeholder="Enter your task"
            />
            <br />
            <button type="button" className="btn btn-primary btn-sm">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
