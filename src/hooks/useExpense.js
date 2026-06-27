import useLocalStorage from "./useLocalStorage";

function useExpense() {

  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(
      expenses.filter((expense) => expense.id !== id)
    );
  };

  return {
    expenses,
    addExpense,
    deleteExpense
  };
}

export default useExpense;