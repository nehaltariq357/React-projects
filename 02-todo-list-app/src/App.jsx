import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTask] = useState([]);
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const addTask = () => {
    if (input.trim() !=""){
      setTask([input,...tasks]);
      setInput("")
    };
  }
  
  //i ha wo tasks ka index ha, or ye jo index hain ye wo function ka paramenter ha, i !== index --> iss ka matlab ha yw dono index equal nhi ha, agar index equal howa tw condition false ho jayee gi, or jo same index tha wo remove ho jaye ga, bas humein condition true rakhna ha, filter method true value ko alag array me rakhta ha.
  const deleteHandler = (index)=>{
    const newTask = tasks.filter((val,i)=>i !==index)
    setTask(newTask)
  }

  return (
    <div>
      <h1>To-do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          onChange={inputHandler}
          value={input}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>{tasks.map((task,i)=>{
        return(
          <li key={i}>{task} <button onClick={()=>deleteHandler(i)}>delete</button></li>
        )
      })}</ul>
    </div>
  );
}

export default App;
