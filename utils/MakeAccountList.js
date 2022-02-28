import { useGetAccountsAccountsGet } from "../api/service/accounts";
import { useGetBalancesBalancesGet } from "../api/service/balances";

function balanceForAccountUid(balances, accountUid) {
  for (const balance of balances) {
    if (balance.account_uuid === accountUid) {
      return balance.balance;
    }
  }
}

const accountColours = [
  {
    bgColour: "bg-indigo-500",
    badgeTextColour: "text-indigo-800",
    badgeBgColour: "bg-indigo-100",
  },
  {
    bgColour: "bg-orange-500",
    badgeTextColour: "text-orange-800",
    badgeBgColour: "bg-orange-100",
  },
  {
    bgColour: "bg-blue-500",
    badgeTextColour: "text-blue-800",
    badgeBgColour: "bg-blue-100",
  },
];

export default function MakeAccountList() {
  const mainAccountQuery = useGetAccountsAccountsGet();
  const mainAccounts = mainAccountQuery.data?.main_accounts;

  const balancesQuery = useGetBalancesBalancesGet();
  const balances = balancesQuery.data;

  let accountList = [];
  let idx = 0;
  if (mainAccounts && balances) {
    mainAccounts.map((mainAccount) => {
      mainAccount.accounts.map((account) => {
        let result = {};
        result.uid = account.accountUid;
        result.type = mainAccount.type_name;
        result.name = account.name;
        result.balance = balanceForAccountUid(balances, account.accountUid);
        result.colours = accountColours[idx++];
        accountList.push(result);
      });
    });
  }
  console.log(accountList);
  return accountList;
}
