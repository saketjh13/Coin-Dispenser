export default function CoinInput({ value, onChange }) {
    return (
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter cents"
        className="p-3 border border-gray-300 rounded-lg shadow w-64 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    );
  }
  