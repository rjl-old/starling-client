import { SidebarNavigation } from "../components/SidebarNavigation";
import { TransactionTable } from "../components/TransactionTable";
import { useGetSettledTransactionsForAccountAccountNameTransactionsGet } from "../api/service/transactions";

export default function Home() {
  const query = useGetSettledTransactionsForAccountAccountNameTransactionsGet(
    "personal",
    {
      query: { refetchInterval: 60 * 1000 },
    }
  );

  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <SidebarNavigation />
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <main className={"flex-1"}>
          <div className={"px-4 py-6"}>
            {/* Main content title */}
            <h1 className={" text-2xl font-semibold"}>Home</h1>
            {/* Content */}
            <div>
              <TransactionTable
                transactions={query.data}
                refetch={query.refetch}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
