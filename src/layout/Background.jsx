import React from "react";

const Background = ({children}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-500 to-indigo-600 flex items-center justify-center">{children}</div>
  );
};

export default Background;
