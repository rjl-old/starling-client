import { useGetAccountsAccountsGet } from "../api/service/accounts";

const colours = ["red", "green", "yellow"];

export default function MakeAccountDetailDictionary() {
  const response = useGetAccountsAccountsGet();
  const mainAccounts = response.data?.main_accounts;
  let accountDictionary = {};
  let idx = 0;
  if (mainAccounts) {
    for (const mainAccount of mainAccounts) {
      for (const account of mainAccount.accounts) {
        accountDictionary[account.accountUid] = {
          name: account.name,
          created: account.createdAt,
          colours: {
            bgColour: "bg-" + colours[idx] + "-500",
            pillColour:
              "bg-" + colours[idx] + "-100 text-" + colours[idx] + "-800",
          },
        };
        idx = idx + 1;
      }
    }
  }
  console.log(accountDictionary);
  return accountDictionary;
}
