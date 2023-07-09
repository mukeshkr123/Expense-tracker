import "./App.css";
import ExpenseForm from "./components/form/form";

const categories = ["All Categories", "Groceries", "Utilities", "Expense"];

function App() {
  return (
    <div className="m-3">
      <ExpenseForm categories={categories} />
    </div>
  );
}

export default App;
