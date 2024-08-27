import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
import InputModal from "./components/InputModal";
import Chat from "./components/Chat";

const App = () => {
  const [employees, setEmployees] = useState([]);

  const [error, setError] = useState("");

  const addEmployee = async (data) => {
    try {
      const response = await fetch("http://localhost:5001/api/add_record", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          table: "employees",
          new_record: data,
        }),
      });

      if (!response.ok) {
        setError("Failed to add employee");
      }

      setError("");

      setEmployees([...employees, data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const getEmployees = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/api/get_records?table=employees",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        setError("Failed to fetch employees");
      }

      setError("");

      const result = await response.json();
      setEmployees(result);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <div className="h-screen p-10 flex flex-col justify-center items-center bg-slate-200">
        {error && <p className="text-red-500 mb-5">{error}</p>}
        <InputModal onSubmit={addEmployee} />
        <Table employees={employees} />
        <Chat />
      </div>
    </>
  );
};

export default App;
