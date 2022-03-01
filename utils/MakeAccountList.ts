import { useGetAccounts } from "../api/service/accounts";
import { useGetBalances } from "../api/service/balances";
import { AccountBalance } from "../api/service/models";

const balanceForAccountUid = (
  balances: AccountBalance[] | undefined,
  accountUid: string
): number | undefined =>
  balances?.find((b) => b.account_uuid == accountUid)?.balance;

const accountColours = [
  {
    bgColour: "bg-card-1-500",
    badgeTextColour: "text-card-1-800",
    badgeBgColour: "bg-card-1-100",
  },
  {
    bgColour: "bg-card-2-500",
    badgeTextColour: "text-card-2-800",
    badgeBgColour: "bg-card-2-100",
  },
  {
    bgColour: "bg-card-3-500",
    badgeTextColour: "text-card-3-800",
    badgeBgColour: "bg-card-3-100",
  },
  {
    bgColour: "bg-card-4-500",
    badgeTextColour: "text-card-4-800",
    badgeBgColour: "bg-card-4-100",
  },
];

export type AccountListItem = {
  uid: string;
  type: string;
  name: string;
  balance: number;
  colours: {
    bgColour: string;
    badgeTextColour: string;
    badgeBgColour: string;
  };
};

/**
 * A custom react hook to get the account list
 */
export const useAccountLists = (): { accounts?: AccountListItem[] } => {
  const { data: mainAccounts } = useGetAccounts({
    query: { select: (d) => d.main_accounts },
  });

  const { data: balances } = useGetBalances();

  const accountPairs = mainAccounts?.flatMap((mainAccount) =>
    mainAccount.accounts.map((account) => ({ mainAccount, account }))
  );

  console.log(accountPairs);

  const accounts = accountPairs?.map(({ mainAccount, account }, index) => ({
    uid: account.accountUid,
    type: mainAccount.type_name,
    name: account.name,
    balance: balanceForAccountUid(balances, account.accountUid),
    colours: accountColours[index % accountColours.length],
  }));

  return { accounts };
};

// export default function MakeAccountList() {
//   const mainAccountQuery = useGetAccountsAccountsGet();
//   const mainAccounts = mainAccountQuery.data?.main_accounts;

//   const balancesQuery = useGetBalancesBalancesGet();
//   const balances = balancesQuery.data;

//   let accountList = [];
//   let idx = 0;
//   if (mainAccounts && balances) {
//     mainAccounts.forEach((mainAccount) => {
//       mainAccount.accounts.forEach((account) => {
//         let result = {};
//         result.uid = account.accountUid;
//         result.type = mainAccount.type_name;
//         result.name = account.name;
//         result.balance = balanceForAccountUid(balances, account.accountUid);
//         result.colours = accountColours[idx++];
//         accountList.push(result);
//       });
//     });
//   }
//   console.log(accountList);
//   return accountList;
// }
