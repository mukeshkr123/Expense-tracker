function ExpenseList({ expenses, onDelete }) {
  const totalAmount = expenses
    .reduce((acc, expense) => expense.amount + acc, 0)
    .toFixed(2);

  return (
    <table className="table mt-3 table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((val, index) => (
          <tr key={index}>
            <td>{val.description}</td>
            <td>{val.amount}</td>
            <td>{val.category}</td>
            <td>
              <button
                onClick={() => onDelete(val.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${totalAmount}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default ExpenseList;
