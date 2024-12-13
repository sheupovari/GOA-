import React from "react";

const Block = ({ color, text }) => (
  <div
    className={`${color} w-32 h-32 flex justify-center items-center rounded-lg shadow-lg text-white font-bold text-lg`}
  >
    {text}
  </div>
);

const App = () => {
  const blocks = [
    { color: "bg-red-500", text: "Red Block" },
    { color: "bg-green-500", text: "Green Block" },
    { color: "bg-blue-500", text: "Blue Block" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen space-x-4">
      {blocks.map((block, index) => (
        <Block key={index} color={block.color} text={block.text} />
      ))}
    </div>
  );
};

export default App;
