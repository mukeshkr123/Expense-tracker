function ExpenseForm({ categories }) {
  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input type="text" className="form-control " />
      </div>
      <div className="mb-3">
        <select className="form-select" name="" id="">
          {categories.map((val, index) => (
            <option key={index} value="">
              {val}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ExpenseForm;
