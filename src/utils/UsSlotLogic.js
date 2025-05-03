export function getUsSlotString(cents) {
    let result = "";
    const coins = [
      ["H", 50],
      ["Q", 25],
      ["D", 10],
      ["N", 5],
      ["P", 1],
    ];
  
    for (const [symbol, value] of coins) {
      while (cents >= value) {
        result += symbol;
        cents -= value;
      }
    }
  
    return result;
  }
  