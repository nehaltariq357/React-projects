import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";


function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [updating, setUpdating] = useState(null);
//set data on local storage
useEffect(()=>{
  localStorage.setItem("task",JSON.stringify(task))
},[task])
//get data from localstorage back
useEffect(() => {
  const savedTask = JSON.parse(localStorage.getItem("task") || "[]");
  setTask(savedTask);
}, []);

  const addTask = () => {
    if (input.trim() === "") return;
    if (updating === null) {
      setTask([input, ...task]);
    } else {
      const newTask = [...task];
      newTask[updating] = input;
      setTask(newTask);
      setUpdating(null);
    }
    setInput("");
  };

  const editHandler = (index) => {
    setInput(task[index]);
    setUpdating(index);
  };

  const deleteHandler = (index) => {
    const newTask = task.filter((_, i) => i !== index);
    setTask(newTask);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">📝 To-Do List</h1>

      <div className="flex gap-4 w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <Button
          className={`px-4 ${updating === null ? "bg-blue-500" : "bg-green-500"} text-white`}
          onClick={addTask}
        >
          {updating === null ? "Add" : "Update"}
        </Button>
      </div>

      <ul className="w-full max-w-md space-y-3">
        {task.map((tasks, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-4 rounded-md shadow-md"
          >
            <span className="text-lg">{tasks}</span>
            <div className="flex gap-2">
              <Button
                className="bg-yellow-400 text-black px-3"
                onClick={() => editHandler(index)}
              >
                Edit
              </Button>
              <Button
                className="bg-red-500 text-white px-3"
                onClick={() => deleteHandler(index)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
