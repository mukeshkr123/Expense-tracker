import "./App.css";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import ExpenseForm from "./components/form/form";

const categories = ["All Categories", "Groceries", "Utilities", "Expense"];

function App() {
  return (
    <div className="m-3">
      <ExpenseForm categories={categories} />
      <ExpenseFilter
        categories={categories}
        onSelectedCategory={(category) => console.log(category)}
      />
    </div>
  );
}

export default App;
