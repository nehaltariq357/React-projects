

interface Props {
  transaction: {
    id: number;
    text: string;
    amount: number;
  }[];
}

const IncomeExpense = ({ transaction }: Props) => {
  const income = transaction
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transaction
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="flex justify-between bg-gray-100 p-4 rounded shadow mb-4">
      <div className="text-center w-1/2">
        <h3 className="text-green-600 font-semibold">Income</h3>
        <p className="text-green-800 font-bold text-xl">${income.toFixed(2)}</p>
      </div>
      <div className="text-center w-1/2 border-l-2 border-gray-300">
        <h3 className="text-red-600 font-semibold">Expense</h3>
        <p className="text-red-800 font-bold text-xl">${Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
