import { formatDistance } from "date-fns";
import React from "react";

const TableHeader = ({ fields }) => {
  return (
    <thead>
      <tr>
        {fields.map((field_name) => (
          <th>{field_name}</th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = ({ transactions }) => {
  const rows = transactions?.map((transaction, index) => {
    const date = formatDistance(new Date(transaction.time), new Date(), {
      addSuffix: true,
    });
    return (
      <tr key={index}>
        <td className="text-gray-500">{date}</td>
        <td>{transaction.counterparty_name}</td>
        <td>{parseFloat(transaction.amount).toPrecision(2)}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

// props is an object that contains the transactions array
// so we can destructure it and assign the transactions variable
export const TransactionTable = ({ transactions, refetch }) => {
  return (
    <div>
      <table>
        <TableHeader fields={["Date", "Payee", "Amount"]} />
        <TableBody transactions={transactions} />
      </table>
      {refetch !== undefined ? <button onClick={refetch}>Update</button> : null}
    </div>
  );
};
