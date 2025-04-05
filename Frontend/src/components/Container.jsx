import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="w-full max-h-screen">{children}</div>
    </>
  );
};

export default Container;
