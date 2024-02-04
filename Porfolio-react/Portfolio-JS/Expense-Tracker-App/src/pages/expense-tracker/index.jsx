const ExpenseTracker = () => {
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

          <form action="" className="add-transaction">
            <input type="text" placeholder="Description" required />
            <input type="number" placeholder="Amount" required />
            <label htmlFor="expense">Expense</label>
            <input type="radio" id="expense" value="expense" />
            <label htmlFor="income">Income</label>
            <input type="radio" id="income" value="income" />

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
