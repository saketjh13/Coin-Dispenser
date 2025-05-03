import { useState, useEffect } from "react";
import CoinInput from "../components/CoinInput.jsx";
import CoinOutput from "../components/CoinOutput.jsx";
import ExchangeInfo from "../components/ExchangeInfo.jsx";
import { getUsSlotString } from "../utils/UsSlotLogic.js";
import { getIndianSlotString } from "../utils/indianSlotLogic.js";

function Machine() {
  const [amount, setAmount] = useState("");
  const [output, setOutput] = useState("");
  const [scientist, setScientist] = useState(null);
  const [system, setSystem] = useState("us");

  const handleAmountChange = (value) => {
    setAmount(value);
  };

  useEffect(() => {
    const cents = parseInt(amount, 10);

    if (isNaN(cents)) {
      setOutput("");
      setScientist(null);
    } else if (cents === 0) {
      setOutput("Please enter a value more than 0");
      setScientist(null);
    } else if (cents > 0) {
      if (system === "us") {
        setOutput(getUsSlotString(cents));
        setScientist(null);
      } else {
        const { result, scientist } = getIndianSlotString(cents);
        setOutput(result);
        setScientist(scientist);
      }
    } else {
      setOutput("");
      setScientist(null);
    }
  }, [amount, system]);

  const slotSystems = [
    { id: "us", label: "US Slot" },
    { id: "indian", label: "Indian Slot" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Coin Dispenser</h1>

      <div className="flex gap-4 mb-4">
        {slotSystems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setSystem(id)}
            className={`px-4 py-2 rounded focus:outline-none ${
              system === id
                ? "bg-blue-500 text-white"
                : "bg-white border border-gray-300 text-gray-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <CoinInput value={amount} onChange={handleAmountChange} />
      <CoinOutput output={output} scientist={scientist} />
      <ExchangeInfo system={system} />
    </div>
  );
}

export default Machine;
