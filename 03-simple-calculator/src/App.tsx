import { useState } from "react";
import "./App.css";
function App() {
  const [input, setInput] = useState("");

  const handleClick = (value:string) => {
    setInput((prev) => prev + value);
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-[300px]">
        <h1 className="text-2xl font-bold text-center mb-4">Calculator</h1>

        <input
          type="text"
          readOnly
          value={input}
          className="w-full mb-4 p-3 text-right text-xl border rounded-xl bg-gray-100"
        />

        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <button className="calc-btn" onClick={() => handleClick("7")}>7</button>
          <button className="calc-btn" onClick={() => handleClick("8")}>8</button>
          <button className="calc-btn" onClick={() => handleClick("9")}>9</button>
          <button className="calc-btn" onClick={() => handleClick("/")}>÷</button>

          {/* Row 2 */}
          <button className="calc-btn" onClick={() => handleClick("4")}>4</button>
          <button className="calc-btn" onClick={() => handleClick("5")}>5</button>
          <button className="calc-btn" onClick={() => handleClick("6")}>6</button>
          <button className="calc-btn" onClick={() => handleClick("*")}>×</button>

          {/* Row 3 */}
          <button className="calc-btn" onClick={() => handleClick("1")}>1</button>
          <button className="calc-btn" onClick={() => handleClick("2")}>2</button>
          <button className="calc-btn" onClick={() => handleClick("3")}>3</button>
          <button className="calc-btn" onClick={() => handleClick("-")}>−</button>

          {/* Row 4 */}
          <button className="calc-btn col-span-1" onClick={() => handleClick("0")}>0</button>
          <button
            className="bg-blue-500 text-white text-xl font-bold py-3 rounded-xl hover:bg-blue-600"
            onClick={handleClear}
          >
            C
          </button>
          <button
            className="bg-blue-600 text-white text-xl font-bold py-3 rounded-xl hover:bg-blue-700"
            onClick={handleEqual}
          >
            =
          </button>
          <button className="calc-btn" onClick={() => handleClick("+")}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
