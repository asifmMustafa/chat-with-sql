import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
import InputModal from "./components/InputModal";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({});

  const [error, setError] = useState("");

  const addEmployee = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/add_record", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          table: "employees",
          new_record: newEmployee,
        }),
      });

      if (!response.ok) {
        setError("Failed to add employee");
      }

      setError("");

      setEmployees([...employees, newEmployee]);
      setNewEmployee({});
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
      console.log(result);
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
      <div className="h-screen flex flex-col justify-center items-center bg-slate-200">
        {error && <p className="text-red-500 mb-5">{error}</p>}
        <InputModal />
        <Table employees={employees} />
      </div>
    </>
  );
};

export default App;
