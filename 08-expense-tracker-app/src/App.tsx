import { useState } from "react";
interface types {
  id: number;
  text: string;
  amount: number;
}
function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [transition, setTransition] = useState<types[]>([]);
  const handleAdd = () => {
    const newTransition = {
      id: Date.now(),
      text: title,
      amount: +amount,
    };
    console.log(typeof amount);
    setTransition([...transition, newTransition]);
    setTitle("");
    setAmount("");
  };
  const handleDelete = (id: number) => {
    const update = transition.filter((item) => item.id !== id);
    setTransition(update);
  };

  const balance = transition.reduce((acc, curr) => acc + curr.amount, 0);
  const income = transition
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transition
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);
  return (
    <div>
      <h1>home</h1>
      <div>
        <h2>Total Balance: {balance}</h2>
        <h3 style={{ color: "green" }}>Income: {income}</h3>
        <h3 style={{ color: "red" }}>Expense: {expense}</h3>
      </div>

      <input
        type="text"
        placeholder="enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>

      <ul>
        {transition.map((t, i) => (
          <li key={i}>
            <p>{t.text}</p>
            <p>{t.amount}</p>
            <button onClick={() => handleDelete(t.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
