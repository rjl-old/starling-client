import React from "react";

import AccountList from "./components/AccountList";
import TransactionList from "./components/TransactionList";

export default function App() {
  return (
    <div>
      <h1>Starling Client</h1>
      <AccountList />
      <TransactionList />
    </div>
  );
}
