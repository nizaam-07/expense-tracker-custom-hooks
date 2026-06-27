function Summary({ expenses }) {

  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <h2>
      Total Spending: ${total}
    </h2>
  );
}

export default Summary;