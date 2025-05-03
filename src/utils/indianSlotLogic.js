export function getIndianSlotString(amount) {
  let result = "";
  let scientist = null;

  const coins = [
    ["H", 30, "Homi Bhabha"],
    ["S", 25, "Satish Dhawan"],
    ["R", 22, "Ramanujam"],
    ["V", 12, "Vikram Sarabhai"],
    ["C", 7, "Cv Raman"],
    ["B", 1, "Bose"],
  ];

  for (const [symbol, value, name] of coins) {
    while (amount >= value) {
      result += symbol;
      amount -= value;
    }
  }

  const lastSymbol = result.slice(-1);
  const coin = coins.find(([symbol]) => symbol === lastSymbol);
  if (coin) {
    scientist = coin[2];
  }

  return { result, scientist };
}
