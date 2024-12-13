import React from "react";

const Box = ({ color }) => {
  return (
    <div
      className={`w-20 h-20 m-2`}
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default Box;


import React from "react";
import Box from "./components/Box";

const App = () => {
  const colors = ["red", "yellow", "green"];
  return (
    <div className="flex">
      {colors.map((color, index) => (
        <Box key={index} color={color} />
      ))}
    </div>
  );
};

