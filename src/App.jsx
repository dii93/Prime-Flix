import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./app.css";
import RoutesApp from "./routes";

function App() {
  return (
    <div className="app">
      <ToastContainer autoClose={3000} />
      <RoutesApp />
    </div>
  );
}

export default App;