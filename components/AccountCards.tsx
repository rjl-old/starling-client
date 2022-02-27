import classNames from "../utils/ClassNames";
import AccountDate from "../utils/AccountDate";

const AccountCard = (account, accountBalance) => {
  return (
    <>
      <li
        key={account.accountUid}
        className="col-span-1 flex shadow-sm rounded-md"
      >
        {/* colour chip */}
        <div
          className={classNames(
            colours[mainAccount.type_name],
            "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
          )}
        >
          {account.name.slice(0, 1)}
        </div>
        {/* body */}
        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
          <div className="flex-1 px-4 py-2 text-sm truncate">
            <a className="text-gray-900 font-medium hover:text-gray-600">
              {account.name}
            </a>
            <p className="text-gray-500">
              <AccountDate dateString={account.createdAt} />
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export const AccountCards = (accountDetails, accountBalance) => {
  return (
    <>
      {" "}
      {/* Content */}
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Accounts :
      </h2>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {/*{mainAccounts?.flatMap((mainAccount) =>*/}
        {/*  mainAccount.accounts.map((account) => (*/}
        {/*    <AccountCard account={account} accountBalance={accountBalance} />*/}
        {/*  ))*/}
        {/*)}*/}
      </ul>
    </>
  );
};
