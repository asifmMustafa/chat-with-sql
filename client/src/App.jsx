import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
import InputModal from "./components/InputModal";

const App = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-slate-200">
        <InputModal />
        <Table />
      </div>
    </>
  );
};

export default App;
