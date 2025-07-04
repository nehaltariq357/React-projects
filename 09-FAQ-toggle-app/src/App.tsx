import { useState } from "react";
import AccordionItem from "./components/AccordionItem";
import { questions } from "./data/questions";

function App() {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        FAQ Toggle App
      </h1>

      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg divide-y divide-gray-200">
        {questions.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            onToggle={handleToggle}
            isOpen={openId === item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
