import React from "react";
import ReactDOM from "react-dom"; // Correct import
import "./index.css";
import App from "./App";
import { WorkoutContextProvider } from "./context/workoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WorkoutContextProvider>
      <App />
    </WorkoutContextProvider>
  </React.StrictMode>
);
