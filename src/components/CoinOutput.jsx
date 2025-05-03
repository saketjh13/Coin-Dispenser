import React from "react";
function CoinOutput({ output, scientist }) {
  if (!output) return null;

  const isError = output.includes("Please enter");
  const lines = output.match(/.{1,20}/g) || [];

  return (
    <div
      className={`text-xl font-mono px-6 py-3 rounded shadow mt-4 max-w-xs text-center ${
        isError ? "bg-red-100 text-red-600" : "bg-white text-gray-800"
      }`}
    >
      {!isError && <div className="font-semibold text-gray-600 mb-1">Output:</div>}

      {lines.map((line, index) => (
        <div key={index} className="font-bold">
          {line}
        </div>
      ))}

      {scientist && !isError && (
        <div className="mt-2 text-sm font-semibold text-blue-600">
          Best wishes from {scientist}
        </div>
      )}
    </div>
  );
}

export default CoinOutput
