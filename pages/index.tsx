import { TransactionTable } from "../components/TransactionTable";
import { useGetSettledTransactionsForAccountDaysAccountTypeNameAccountNameTransactionsDaysGet } from "../api/service/transactions";
import { Tabs } from "../components/Tabs";
import { Layout } from "../components/Layout";

export default function Home() {
  const query =
    useGetSettledTransactionsForAccountDaysAccountTypeNameAccountNameTransactionsDaysGet(
      "personal",
      "personal",
      31,
      {
        query: { refetchInterval: 60 * 1000 },
      }
    );

  return (
    <>
      {/* Main content title */}
      <h1 className={" text-2xl font-semibold pb-4"}>Home</h1>
      <div className={"pb-6"}>
        <Tabs />
      </div>
      {/* Content */}
      <div>
        <TransactionTable transactions={query.data} refetch={query.refetch} />
      </div>
    </>
  );
}

Home.Layout = Layout;
