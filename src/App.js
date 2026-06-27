import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filters from "./components/Filters";
import Summary from "./components/Summary";

import useExpense from "./hooks/useExpense";

function App() {

  const {
    expenses,
    addExpense,
    deleteExpense
  } = useExpense();

  const [category, setCategory] = useState("");

  const filteredExpenses =
    expenses.filter((expense) =>
      expense.category
        .toLowerCase()
        .includes(category.toLowerCase())
    );

  return (
    <div>

      <h1>Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} />

      <Filters
        category={category}
        setCategory={setCategory}
      />

      <Summary expenses={filteredExpenses} />

      <ExpenseList
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
      />

    </div>
  );
}

export default App;