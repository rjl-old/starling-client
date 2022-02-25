import { Layout } from "../components/Layout";
import { useGetAccountsAccountsGet } from "../api/service/accounts";

export default function AccountDetails() {
  const response = useGetAccountsAccountsGet();
  const mainAccounts = response.data?.main_accounts;
  return (
    <>
      {/* Main content title */}
      <h1 className={" text-2xl font-semibold pb-4"}>Accounts</h1>

      {/* Content */}
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Accounts :
      </h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {mainAccounts?.map(function (mainAccount, idx) {
          console.log(mainAccount);
          return (
            <>
              <p>{mainAccount.type_name}</p>
              {mainAccount.accounts.accounts.map(function (account) {
                return <p>{account.accountUid}</p>;
              })}
            </>
          );
        })}
      </ul>
    </>
  );
}

AccountDetails.Layout = Layout;
