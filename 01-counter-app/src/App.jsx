import { useState } from "react";
import "./App.css";
import { Button } from "../src/components/ui/button";

function App() {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount(count + 1);
  };
  const decrementHandler = () => {
    setCount(count - 1);
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
     <div className="text-center bg-white p-12 rounded-xl shadow-md">
       <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <p className="text-5xl font-semibold mb-6 transition-all duration-300">{count}</p>
       <div className="flex items-center justify-center gap-6">
      <button
        onClick={decrementHandler}
        className="bg-blue-500 text-white text-3xl font-bold w-14 h-14 rounded-md"
      >
        -
      </button>

      <Button
        onClick={resetHandler}
        variant="outline"
        className="px-6 py-3 text-base font-semibold"
      >
        Reset
      </Button>

      <button
        onClick={incrementHandler}
        className="bg-blue-500 text-white text-3xl font-bold w-14 h-14 rounded-md"
      >
        +
      </button>
    </div>
     </div>
    </div>
  );
}

export default App;
