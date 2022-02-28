import { formatDistance } from "date-fns";
import React, { FC } from "react";
import { useGetAccountsAccountsGet } from "../api/service/accounts";
import { Transaction } from "../api/service/models";
import { AccountListItem } from "../utils/MakeAccountList";
import { Badge } from "./Badge";

const accountForAccountUID = (
  accountList: AccountListItem[] | undefined,
  accountUid: string
): AccountListItem => accountList?.find((a) => a.uid === accountUid);

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

type TableBodyProps = {
  transactions: Transaction[];
  accountList?: AccountListItem[];
};

const TableBody: FC<TableBodyProps> = ({ transactions, accountList }) => {
  const rows = transactions?.map((transaction, transactionIdx) => {
    const date = formatDistance(new Date(transaction.time), new Date(), {
      addSuffix: true,
    });
    const account = accountForAccountUID(accountList, transaction.account_uid);
    return (
      <tr key={transactionIdx} className={transactionIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900">{date}</td>
        <td className="px-6 py-1 whitespace-nowrap">
          <Badge
            text={account.name ?? "Unknown"}
            textColour={account.colours.badgeTextColour}
            bgColour={account.colours.badgeBgColour}
          />
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
          {transaction.amount > 0 ? transaction.amount.toFixed(2) : ""}
        </td>
        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-red-500 text-right">
          {transaction.amount <= 0 ? transaction.amount.toFixed(2) : ""}
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

type TransactionTableProps = {
  transactions: Transaction[];
  refetch: () => void;
  accountList?: AccountListItem[];
};

// props is an object that contains the transactions array
// so we can destructure it and assign the transactions variable
export const TransactionTable: FC<TransactionTableProps> = ({
  transactions,
  refetch,
  accountList,
}) => {
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
          <TableBody transactions={transactions} accountList={accountList} />
        </table>
      </div>
      {refetch !== undefined ? (
        <button className="bg-purple-900 text-white p-2 mx-6 my-8 rounded-md" onClick={refetch}>
          Update
        </button>
      ) : null}
    </>
  );
};
