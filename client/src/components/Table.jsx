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

const Table = () => {
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <TableRow>
            <TableHeaderCell text="Product name" />
            <TableHeaderCell text="Color" />
            <TableHeaderCell text="Category" />
            <TableHeaderCell text="Price" />
            <TableHeaderCell text="Action" />
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableBodyCell>
              <p className="font-medium text-gray-900 whitespace-nowrap">
                Apple MacBook Pro 17"
              </p>
            </TableBodyCell>
            <TableBodyCell text="Silver" />
            <TableBodyCell text="Laptop" />
            <TableBodyCell text="$2999" />
            <TableBodyCell>
              <a href="#" class="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </TableBodyCell>
          </TableRow>
          <TableRow>
            <TableBodyCell>
              <p className="font-medium text-gray-900 whitespace-nowrap">
                Apple MacBook Pro 17"
              </p>
            </TableBodyCell>
            <TableBodyCell text="Silver" />
            <TableBodyCell text="Laptop" />
            <TableBodyCell text="$2999" />
            <TableBodyCell>
              <a href="#" class="font-medium text-blue-600 hover:underline">
                Edit
              </a>
            </TableBodyCell>
          </TableRow>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
