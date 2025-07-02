

interface Props {
  transaction: {
    id: number;
    text: string;
    amount: number;
  }[];
}

const Balance = ({ transaction }: Props) => {
  const total = transaction.reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="bg-white shadow-md rounded p-4 text-center mb-4">
      <h2 className="text-xl font-bold text-gray-700">Your Balance</h2>
      <p className="text-3xl font-semibold text-blue-600">
        ${total.toFixed(2)}
      </p>
    </div>
  );
};

export default Balance;
