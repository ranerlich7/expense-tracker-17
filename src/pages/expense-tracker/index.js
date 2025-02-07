import useAddTransaction from "../../hooks/useAddTransaction"

function ExpenseTracker() {
  const { addTransaction } = useAddTransaction()
  function onSubmit(e) {
    e.preventDefault()
    addTransaction({
      description: "It works!!!",
      transactionAmount: 888,
      transactionType: "expense",
    })
  }
  return (
    <>
      <h1> Expense Tracker</h1>
      <h2>Balance</h2>
      <p>1.1</p>
      <div>
        <h4>Income</h4>
        <p>0.0</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p>0.0</p>
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Description" required />
        <input type="number" placeholder="Amount" required />
        <input type="radio" id="expense" value="expense" />
        <label htmlFor="expense">Expense</label>
        <input type="radio" id="income" value="income" />
        <label htmlFor="income">Income</label>
        <button type="submit">Add Transaction</button>
      </form>
      <div>
        <h3>Transactions</h3>
      </div>
    </>
  )
}

export default ExpenseTracker
