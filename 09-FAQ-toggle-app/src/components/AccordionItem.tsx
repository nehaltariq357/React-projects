interface Props {
  item: { id: number; question: string; answer: string };
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const AccordionItem = ({ item, isOpen, onToggle }:Props) => {
return (
    <div className="border-b border-gray-300">
      <div
        className="flex justify-between items-center cursor-pointer p-4 bg-white hover:bg-gray-50 transition"
        onClick={() => onToggle(item.id)}
      >
        <h1 className="text-lg font-medium text-gray-800">{item.question}</h1>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && (
        <div className="bg-gray-100 px-4 py-3 text-gray-700">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;

