import React from "react";

const Divider = ({ width }) => {
  return (
    <div className={`${width ? `w-[${width}rem]` : "w-full"} border-b-2`}></div>
  );
};

export default Divider;
