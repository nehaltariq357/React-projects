import TransactionItems from "./TransactionItems";

interface Props {
  transaction: {
    id: number;
    text: string;
    amount: number;
  }[];
  onDelete: (id: number) => void;
}

const TransactionList = ({ transaction, onDelete }: Props) => {
  return (
    <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-center text-blue-700">Transaction History</h2>
      
      <ul className="space-y-3">
        {transaction.map((t) => (
          <TransactionItems key={t.id} transaction={t} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
