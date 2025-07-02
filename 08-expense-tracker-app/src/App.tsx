import { useState } from "react";
import AddTransactions from "./components/AddTransactions";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";

// Define transaction type
export interface TransactionType {
  id: number;
  text: string;
  amount: number;
}

function App() {
  // useState to store all transactions
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  // add new transaction
  const handleAdd = (newTransaction: TransactionType) => {
    setTransactions([...transactions, newTransaction]);
  };

  // delete a transaction by ID
  const handleDelete = (id: number) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold text-center mb-4">💰 Expense Tracker</h1>

      <Balance transaction={transactions} />
      <IncomeExpense transaction={transactions} />
      <AddTransactions onAdd={handleAdd} />
      <TransactionList transaction={transactions} onDelete={handleDelete} />
    </div>
  );
}

export default App;
