const ExpenseFilter = ({ onSelectedCategory, categories }) => {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onSelectedCategory(selectedCategory);
  };

  return (
    <select className="form-select mt-3" onChange={handleCategoryChange}>
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
