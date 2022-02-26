import { formatDistance } from "date-fns";
import React from "react";
import { useGetAccountsAccountsGet } from "../api/service/accounts";

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

const TableBody = ({ transactions, accountDictionary }) => {
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
          {accountDictionary[transaction.account_uid]}
        </td>
        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
          {transaction.counterparty_name}
        </td>
        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
          {transaction.category_uid}
        </td>
        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
          {transaction.status}
        </td>
        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-green-500 text-right">
          {parseFloat(transaction.amount) > 0
            ? parseFloat(transaction.amount).toFixed(2)
            : ""}
        </td>
        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-red-500 text-right">
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
export const TransactionTable = ({
  transactions,
  refetch,
  accountDictionary,
}) => {
  const response = useGetAccountsAccountsGet();
  return (
    <>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="w-full">
          <TableHeader
            fields={[
              "Date",
              "Account",
              "Payee",
              "Budget Category",
              "Status",
              { name: "Inflow", align: "right" },
              { name: "Outflow", align: "right" },
            ]}
          />
          <TableBody
            transactions={transactions}
            accountDictionary={accountDictionary}
          />
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
