import React from "react";

const App = () => {
  
  const colors = ["bg-red-500", "bg-green-500", "bg-blue-500"];

  return (
    <div className="flex justify-center items-center min-h-screen space-x-4">
      {colors.map((color, index) => (
        
        <div
          key={index}
          className={`${color} w-32 h-32 flex justify-center items-center text-white font-bold text-lg`}
        ><p>hello world</p>
          Block {index + 1}
        </div>
      ))}
    </div>
  );
};

export default App;
