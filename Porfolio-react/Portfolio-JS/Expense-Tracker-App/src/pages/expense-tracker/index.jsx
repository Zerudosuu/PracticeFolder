import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";

const ExpenseTracker = () => {
  const { addTransaction } = useAddTransaction();
  const [description, setDiscrptions] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      Description: description,
      transactionAmount: parseFloat(transactionAmount),
      transactionType: transactionType,
    });

    setDiscrptions("");
    setTransactionAmount(0);
    setTransactionType("expense");
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

      <div className="transactions">
        <h2>transaction</h2>
      </div>
    </>
  );
};

export default ExpenseTracker;
