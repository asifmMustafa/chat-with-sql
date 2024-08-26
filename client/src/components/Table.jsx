import React from "react";

const TableRow = ({ children }) => {
  return <tr class="odd:bg-white even:bg-gray-50 border-b">{children}</tr>;
};

const TableHeaderCell = ({ text }) => {
  return (
    <th scope="col" class="px-6 py-3">
      {text}
    </th>
  );
};

const TableBodyCell = ({ text, children }) => {
  return (
    <td class="px-6 py-4">
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
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
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
  );
};

export default Table;
