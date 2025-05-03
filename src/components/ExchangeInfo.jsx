import React from "react";
function ExchangeInfo({ system }) {
  const usCoins = [
    { name: "Penny", symbol: "P", value: 1 },
    { name: "Nickel", symbol: "N", value: 5 },
    { name: "Dime", symbol: "D", value: 10 },
    { name: "Quarter", symbol: "Q", value: 25 },
    { name: "Half-Dollar", symbol: "H", value: 50 },
  ];

  const indianCoins = [
    { name: "Bose", symbol: "B", value: 1 },
    { name: "Cv Raman", symbol: "C", value: 7 },
    { name: "Vikram Sarabhai", symbol: "V", value: 12 },
    { name: "Ramanujam", symbol: "R", value: 22 },
    { name: "Satish Dhawan", symbol: "S", value: 25 },
    { name: "Homi Bhabha", symbol: "H", value: 30 },
  ];

  const coins = system === "indian" ? indianCoins : usCoins;

  return (
    <div className="bg-white shadow rounded p-4 mt-6 max-w-sm w-full min-h-[200px]">
      <h2 className="text-lg font-semibold mb-2 text-gray-700">
        {system === "indian" ? "Indian Coin Values" : "US Coin Values"}
      </h2>
      <ul className="space-y-1 text-sm text-gray-600">
        {coins.map((coin) => (
          <li key={coin.symbol}>
            <span className="font-bold">{coin.symbol}</span>: {coin.name} – {coin.value}
            {system === "us" ? "¢" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ExchangeInfo