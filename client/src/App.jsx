import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";

const App = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-slate-200">
        <Table />
      </div>
    </>
  );
};

export default App;
