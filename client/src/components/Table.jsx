import React from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const TableRow = ({ children }) => {
  return <tr className="odd:bg-white even:bg-gray-50 border-b">{children}</tr>;
};

const TableHeaderCell = ({ text }) => {
  return (
    <th scope="col" className="px-6 py-3 text-center">
      {text}
    </th>
  );
};

const TableBodyCell = ({ text, children }) => {
  return (
    <td className="sm:px-6 sm:py-4 px-3 py-2 text-center">
      {text}
      {children}
    </td>
  );
};

const Table = ({ employees }) => {
  const headers = [
    "Name",
    "Age (yrs)",
    "Sex",
    "Position",
    "Salary ($)",
    "Phone",
  ];

  return (
    <>
      {employees.length !== 0 ? (
        <div className="relative md:w-[75%] w-full max-h-96 overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
          <table className="w-full sm:text-sm text-xs text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <TableRow>
                {headers.map((header, i) => (
                  <TableHeaderCell key={i} text={header} />
                ))}
              </TableRow>
            </thead>
            <tbody>
              {employees.map((employee, i) => (
                <TableRow key={i}>
                  <TableBodyCell>
                    <p className="font-medium text-gray-900 whitespace-nowrap">
                      {employee.name}
                    </p>
                  </TableBodyCell>
                  <TableBodyCell text={employee.age} />
                  <TableBodyCell text={employee.sex} />
                  <TableBodyCell text={employee.position} />
                  <TableBodyCell text={employee.salary} />
                  <TableBodyCell text={employee.phone_number} />
                </TableRow>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div role="status" class="md:w-[75%] w-full p-10 bg-white">
          <LoadingSkeleton />
        </div>
      )}
    </>
  );
};

export default Table;
