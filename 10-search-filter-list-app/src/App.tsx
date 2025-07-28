import { useState } from "react";

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Watermelon",
  "Grapes",
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredFruits = fruits.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Search & Filter</h1>
        
        <input
          type="text"
          placeholder="Search fruits..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <ul className="space-y-2">
          {filteredFruits.length > 0 ? (
            filteredFruits.map((fruit, index) => (
              <li
                key={index}
                className="p-2 bg-blue-50 border border-blue-200 rounded"
              >
                {fruit}
              </li>
            ))
          ) : (
            <li className="text-gray-500 text-center">No fruits found</li>
          )}
        </ul>
      </div>
    </div>
  );
}
