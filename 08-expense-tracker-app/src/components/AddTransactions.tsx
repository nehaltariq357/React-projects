import { useState } from "react";

interface Props {
  onAdd: (newTransaction: { id: number; text: string; amount: number }) => void;
}

const AddTransactions = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (!title || !amount) return;

    const newTransaction = {
      id: Date.now(),
      text: title,
      amount: +amount,
    };
    onAdd(newTransaction);
    setTitle("");
    setAmount("");
  };

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto mt-6">
      <h1 className="text-xl font-semibold mb-4 text-center text-blue-700">Add New Transaction</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-sm text-gray-500 mt-1">
          (Use negative value for expense, positive for income)
        </p>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all"
      >
        Add Transaction
      </button>
    </div>
  );
};

export default AddTransactions;
