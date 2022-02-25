import { Layout } from "../components/Layout";
import { useGetAccountsAccountsGet } from "../api/service/accounts";

export default function Settings() {
  const response = useGetAccountsAccountsGet();
  const main_accounts = response.data?.main_accounts;
  console.log(main_accounts[0].accounts.accounts);
  return (
    <>
      {/* Main content title */}
      <h1 className={" text-2xl font-semibold pb-4"}>Settings</h1>

      {/* Content */}
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Accounts:
      </h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
      ></ul>
    </>
  );
}

Settings.Layout = Layout;
