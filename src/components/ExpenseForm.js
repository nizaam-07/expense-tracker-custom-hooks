import useFormInput from "../hooks/useFormInput";

function ExpenseForm({ addExpense }) {

  const title = useFormInput("");
  const amount = useFormInput("");
  const category = useFormInput("");
  const date = useFormInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addExpense({
      id: Date.now(),
      title: title.value,
      amount: Number(amount.value),
      category: category.value,
      date: date.value
    });

    title.setValue("");
    amount.setValue("");
    category.setValue("");
    date.setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        {...title}
      />

      <input
        type="number"
        placeholder="Amount"
        {...amount}
      />

      <input
        type="text"
        placeholder="Category"
        {...category}
      />

      <input
        type="date"
        {...date}
      />

      <button type="submit">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;