import React from "react";
import axios from "axios";

export default class AccountList extends React.Component {
  state = {
    accounts: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8080/accounts/personal").then((res) => {
      const accounts = res.data;
      this.setState({ accounts: accounts });
    });
  }

  render() {
    return (
      <ul>
        {this.state.accounts.map((account) => (
          <li key={account.uuid}>
            {account.uuid} : {account.name}
          </li>
        ))}
      </ul>
    );
  }
}
