import "./App.css";
import { quiz } from "../data";
import { useState } from "react";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0); // index of the current question
  const [score, setScore] = useState(0); // total correct answers
  const [showScore, setShowScore] = useState(false); // whether to show final score
  const [selectedOption, setSelectedOption] = useState(""); // user's selected choice

  // Handle option click
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
console.log(score)
  // Handle next button click
  const handleNext = () => {
    if (selectedOption === quiz[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(""); // Clear selected option

    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  // Handle quiz reset
  const handleReset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption("");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen px-4 bg-gray-100">
      <div className="bg-white p-10 rounded-lg flex flex-col justify-center items-center w-[500px] min-h-[400px] transition-all duration-300">

      <h1 className="text-blue-900 font-semibold text-4xl mb-8">Quiz App</h1>

      {showScore ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-700">
            Your score: {score} / {quiz.length}
          </h1>
          <button
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleReset}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="w-full max-w-xl">
          <p className="text-2xl mb-6 flex justify-center">{quiz[currentQuestion].question}</p>
          <ul className="space-y-3">
            {quiz[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                className={`border rounded px-4 py-2 cursor-pointer ${
                  selectedOption === option
                    ? "bg-blue-500 text-white"
                    : "border-gray-400 bg-gray-200"
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>

          <button
            className={`mt-6 w-full py-2 rounded font-semibold text-white ${
              selectedOption
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={handleNext}
            disabled={!selectedOption}
          >
            {currentQuestion + 1 === quiz.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
