import { useGetTransactionsTransactionsGet } from "../api/service/transactions";
import { Layout } from "../components/Layout";
import { format, subDays } from "date-fns";
import MakeAccountList from "../utils/MakeAccountList";
import { AccountCards } from "../components/AccountCards";
import { Tabs } from "../components/Tabs";
import { TransactionTable } from "../components/TransactionTable";

export default function Home({}) {
  const accountList = MakeAccountList();
  const end_date = new Date();
  const start_date = subDays(end_date, 28);
  const start_date_string = format(start_date, "yyyy-MM-dd'T'HH:mm:ss'Z'");
  const end_date_string = format(end_date, "yyyy-MM-dd'T'HH:mm:ss'Z'");

  const transactions = useGetTransactionsTransactionsGet(
    {
      start_date: start_date_string,
      end_date: end_date_string,
    },
    {
      query: { refetchInterval: 5 * 60 * 1000 },
    }
  );

  return (
    <>
      {/* Main content title */}
      <h1 className={" text-2xl font-semibold pb-4"}>Home</h1>

      {/* Content */}
      <AccountCards accountList={accountList} />
      <div className={"pb-6"}>
        <Tabs />
      </div>
      <div>
        <TransactionTable
          transactions={transactions.data}
          refetch={transactions.refetch}
          accountList={accountList}
        />
      </div>
    </>
  );
}

Home.Layout = Layout;
