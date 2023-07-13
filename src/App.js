import Expenses from "./data";
import "./App.css";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import ExpenseForm from "./components/form/form";
import { useState } from "react";
import ExpenseList from "./components/ExpenseList/List";
import categories from "./categories";

function App() {
  const [expenses, setExpenses] = useState(Expenses);
  const [selecetdCategory, setSelecetdCategory] = useState("");
  console.log(selecetdCategory);

  const selectedExpenses =
    selecetdCategory && selecetdCategory !== "All Categories"
      ? expenses.filter((item) => item.category === selecetdCategory)
      : expenses;

  return (
    <div className="m-3">
      <ExpenseForm categories={categories} />
      <ExpenseFilter
        categories={categories}
        onSelectedCategory={(category) => setSelecetdCategory(category)}
      />
      <ExpenseList
        expenses={selectedExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((item) => item.id !== id))
        }
      />
    </div>
  );
}

export default App;
