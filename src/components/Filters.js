function Filters({ category, setCategory }) {

  return (
    <div>

      <input
        type="text"
        placeholder="Search Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      />

    </div>
  );
}

export default Filters;