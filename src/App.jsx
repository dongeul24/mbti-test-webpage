import React from "react";
import Router from "./shared/Router";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer/>
      <Router></Router>
    </>
  );
};

export default App;
