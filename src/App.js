import "./App.css";
import React from "react";
import { ProgressContextProvider } from "./context/ProgressContext";

function App() {
  return (
    <>
      <ProgressContextProvider />
    </>
  );
}

export default App;
