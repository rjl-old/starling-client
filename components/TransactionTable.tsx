import { formatDistance } from "date-fns";
import React from "react";

const TableHeader = ({ fields }) => {
  return (
    <thead className="bg-gray-50 border-b">
      <tr>
        {fields.map((field) => (
          <th
            key={field.name ?? field}
            className={
              "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" +
              (field.align === "right" ? " text-right" : " text-left")
            }
          >
            {field.name ?? field}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = ({ transactions }) => {
  const rows = transactions?.map((transaction, transactionIdx) => {
    const date = formatDistance(new Date(transaction.time), new Date(), {
      addSuffix: true,
    });
    return (
      <tr
        key={transactionIdx}
        className={transactionIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
      >
        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
          {date}
        </td>
        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
          {transaction.counterparty_name}
        </td>
        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
          {parseFloat(transaction.amount) > 0
            ? parseFloat(transaction.amount).toFixed(2)
            : ""}
        </td>
        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
          {parseFloat(transaction.amount) <= 0
            ? parseFloat(transaction.amount).toFixed(2)
            : ""}
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

// props is an object that contains the transactions array
// so we can destructure it and assign the transactions variable
export const TransactionTable = ({ transactions, refetch }) => {
  return (
    <>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="w-full">
          <TableHeader
            fields={[
              "Date",
              "Payee",
              { name: "Inflow", align: "right" },
              { name: "Outflow", align: "right" },
            ]}
          />
          <TableBody transactions={transactions} />
        </table>
      </div>
      {refetch !== undefined ? (
        <button
          className="bg-purple-900 text-white p-2 mx-6 my-8 rounded-md"
          onClick={refetch}
        >
          Update
        </button>
      ) : null}
    </>
  );
};
