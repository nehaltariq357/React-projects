

interface Props {
  transaction: {
    id: number;
    text: string;
    amount: number;
  };
  onDelete: (id: number) => void;
}

const TransactionItems = ({ transaction, onDelete }: Props) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const borderColor = transaction.amount < 0 ? "border-red-500" : "border-green-500";

  return (
    <li
      className={`flex justify-between items-center p-3 border-l-4 ${borderColor} bg-gray-100 rounded shadow`}
    >
      <div>
        <p className="font-medium text-gray-800">{transaction.text}</p>
        <p className="text-sm text-gray-500">
          {sign}${Math.abs(transaction.amount)}
        </p>
      </div>
      <button
        onClick={() => onDelete(transaction.id)}
        className="text-sm text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
};

export default TransactionItems;
