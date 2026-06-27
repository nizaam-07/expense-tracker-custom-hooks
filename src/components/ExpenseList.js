function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>

      {expenses.map((expense) => (
        <div className="expense-card" key={expense.id}>
          <div className="expense-info">
            <span>{expense.title}</span>
            <span>${expense.amount}</span>
            <span>{expense.category}</span>
            <span>{expense.date}</span>
          </div>

          <button
            className="delete-btn"
            onClick={() => deleteExpense(expense.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;