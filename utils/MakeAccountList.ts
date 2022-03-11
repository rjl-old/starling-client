/**
 * MakeAccountList.js
 *
 * A utility function to make a list of Account objects with balances and colours
 */

import { AccountBalanceSchema } from "../api/service/models";
import { useGetAccountBalances, useGetAccounts } from "../api/service/accounts";

/**
 * Get the effective balance of an account with the given uid
 * @param balances
 * @param accountUid
 */
const effectiveBalanceForAccountUuid = (
  balances: AccountBalanceSchema[] | undefined,
  accountUuid: string
): number | undefined =>
  balances?.find((b) => b.uuid == accountUuid)?.effective_balance;

// Define a set of TailwindCSS properties to specify account colour formatting
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

// Define a schema for an Account List item
export type AccountListItem = {
  uuid: string;
  bank_name: string;
  account_name: string;
  balance: number;
  colours: {
    bgColour: string;
    badgeTextColour: string;
    badgeBgColour: string;
  };
};

/**
 * A custom react hook to build a list of accounts and balances.
 */
export const useAccountList = () => {
  const { data: accounts } = useGetAccounts(
    {},
    { query: { select: (d) => d } }
  );
  const { data: balances } = useGetAccountBalances({
    query: { select: (d) => d },
  });
  const accountList: AccountListItem[] = accounts?.map((account, idx) => {
    let colourIdx = idx % accountColours.length;
    return {
      uuid: account.uuid,
      bank_name: account.bank_name,
      account_name: account.account_name,
      balance: effectiveBalanceForAccountUuid(balances, account.uuid),
      colours: accountColours[colourIdx],
    };
  });
  return { accountList };
};
