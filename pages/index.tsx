// import { useGetTransactions } from "../api/service/transactions";
import { Layout } from "../components/Layout";
import { endOfToday, format, subWeeks } from "date-fns";
import { useAccountList } from "../utils/MakeAccountList";
import { AccountCards } from "../components/AccountCards";

export default function Home({}) {
  const accounts = useAccountList();
  const end_date = endOfToday();
  const start_date = subWeeks(end_date, 4);
  const start_date_string = format(start_date, "yyyy-MM-dd'T'HH:mm:ss'Z'");
  const end_date_string = format(end_date, "yyyy-MM-dd'T'HH:mm:ss'Z'");

  // const transactions = useGetTransactions(
  //   {
  //     start_date: start_date_string,
  //     end_date: end_date_string,
  //   },
  //   {
  //     query: { refetchInterval: 5 * 60 * 1000, keepPreviousData: true },
  //   }
  // );

  return (
    <>
      {/* Main content title */}
      <h1 className={" text-2xl font-semibold pb-4"}>Home</h1>
      {/* Content */}
      <AccountCards accounts={accounts.accountList} />{" "}
      {/*# FIXME Ask Alex about property */}
      {/*<div className={"pb-8"}>*/}
      {/*  <Tabs />*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <TransactionTable*/}
      {/*    transactions={transactions.data}*/}
      {/*    refetch={transactions.refetch}*/}
      {/*    accountList={accounts}*/}
      {/*  />*/}
      {/*</div>*/}
    </>
  );
}

Home.Layout = Layout;
