import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";

const ExpenseTracker = () => {
  //?custom hook functions
  const { addTransaction } = useAddTransaction();
  const { transaction } = useGetTransactions();

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
          <h1>Expense Tracker</h1>
          <div className="balance">
            <h3>Your Balance</h3>
            <h2>$0.00</h2>
          </div>

          <div className="summary">
            <div className="income">
              <h4>Income</h4>
              <p>$0.00</p>
            </div>
            <div className="expenses">
              <h4>Expenses</h4>
              <p>$0.00</p>
            </div>
          </div>

          <form action="" className="add-transaction" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Description"
              required
              onChange={(e) => setDiscrptions(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              required
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
                <p>${transactionAmount} </p>
                <h1>{transactionType}</h1>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ExpenseTracker;
