import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";

import { useGetUserInfo } from "../../hooks/useGetUserInfo";

import "./style.css";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";
const ExpenseTracker = () => {
  //?custom hook functions
  const { addTransaction } = useAddTransaction();
  const { transaction, transactiontotal } = useGetTransactions();
  const { name, profilePhoto } = useGetUserInfo();

  const { income, expense, balance } = transactiontotal;
  const navigate = useNavigate();

  // ? on this code, we use useState to the values, on change for it to be passed to the addTransaction using useaddTransaction custom hook with properties of { Description, transactionAmount, and transactionType}
  const [Description, setDiscrptions] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  const onSubmit = (e) => {
    e.preventDefault();

    //? calling the addTransaction here so that it will return the value to the function
    addTransaction({
      Description,
      transactionAmount,
      transactionType,
    });
  };

  return (
    <>
      <div className="expense-tracker">
        <div className="container">
          <h1>{name}'s Expense Tracker</h1>
          <div className="balance">
            <h3>Your Balance</h3>
            {balance >= 0 ? <h2>${balance}</h2> : <h2>-${balance * -1}</h2>}
          </div>

          <div className="summary">
            <div className="income">
              <h4>Income</h4>
              <p>${income}</p>
            </div>
            <div className="expenses">
              <h4>Expenses</h4>
              <p>${expense}</p>
            </div>
          </div>

          <form action="" className="add-transaction" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Description"
              value={Description}
              required
              onChange={(e) => setDiscrptions(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              required
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              id="expense"
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="income">Income</label>
            <input
              type="radio"
              id="income"
              value="income"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
            />

            <button type="submit"> Add Transaction</button>
          </form>
        </div>

        <div>
          {profilePhoto && (
            <div className="profile">
              {" "}
              <img src={profilePhoto} className="profile-photo" alt="" />
              <button
                className="sign-out-button"
                onClick={async () => {
                  try {
                    await signOut(auth);
                    localStorage.clear();
                    navigate("/");
                  } catch (e) {
                    console.log(e);
                  }
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>

      {/*

       ? mapping over the transaction that has been passed through custom hook 
       ? the transaction consist of the following properties: Description, transactionAmount and type, 
      
      */}

      <div className="transactions">
        <h2>transaction</h2>

        <ul>
          {transaction.map((transaction) => {
            const { Description, transactionAmount, transactionType } =
              transaction;

            return (
              <li key={transaction.id}>
                <h4>{Description}</h4>
                <p>
                  ${transactionAmount} •{" "}
                  <label
                    style={{
                      color: transactionType === "expense" ? "red" : "green",
                    }}
                  >
                    {" "}
                    {transactionType}
                  </label>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ExpenseTracker;
