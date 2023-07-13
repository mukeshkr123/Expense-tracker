import Expenses from "./data";
import "./App.css";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import ExpenseForm from "./components/form/form";
import { useState } from "react";
import ExpenseList from "./components/ExpenseList/List";
import categories from "./categories";

function App() {
  const [expenses, setExpenses] = useState(Expenses);
  const [selectedCategory, setSelectedCategory] = useState("");

  const ALL_CATEGORIES = "All Categories";

  const selectedExpenses =
    selectedCategory && selectedCategory !== ALL_CATEGORIES
      ? expenses.filter((item) => item.category === selectedCategory)
      : expenses;

  return (
    <div className="m-3">
      <ExpenseForm
        categories={categories}
        onSubmit={(expense) =>
          setExpenses((prevExpenses) => [
            ...prevExpenses,
            { ...expense, id: prevExpenses.length + 1 },
          ])
        }
      />
      <ExpenseFilter
        categories={categories}
        onSelectedCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={selectedExpenses}
        onDelete={(id) =>
          setExpenses((prevExpenses) =>
            prevExpenses.filter((item) => item.id !== id)
          )
        }
      />
    </div>
  );
}

export default App;
