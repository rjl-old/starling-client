import React from "react";
import axios from "axios";

export default class TransactionList extends React.Component {
  state = {
    transactions: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/account/personal/transactions/31")
      .then((res) => {
        const transactions = res.data;
        this.setState({ transactions: transactions });
        console.log(transactions);
      });
  }

  render() {
    return (
      <ul>
        {this.state.transactions.map((transaction) => (
          <li key={transaction.uuid}>
            {transaction.time} - {transaction.counterparty_name} :{" "}
            {transaction.amount}
          </li>
        ))}
      </ul>
    );
  }
}
