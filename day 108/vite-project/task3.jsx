import React from "react";

const EvenDivs = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex flex-wrap">
      {numbers
        .filter((num) => num % 2 === 0)
        .map((num) => (
          <div
            key={num}
            className="w-20 h-20 bg-blue-500 m-2 flex items-center justify-center text-white"
          >
            {num}
          </div>
        ))}
    </div>
  );
};

export default EvenDivs;
