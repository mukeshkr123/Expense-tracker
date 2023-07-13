const ExpenseFilter = ({ onSelectedCategory, categories }) => {
  return (
    <select
      className="form-select mt-3"
      onChange={(event) => onSelectedCategory(event.target.value)}
    >
      <option value="">All Categories</option>

      {categories.map((val, index) => (
        <option key={index} value={val}>
          {val}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
