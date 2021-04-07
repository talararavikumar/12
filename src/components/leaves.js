import React from "react";
import { useSelector } from "react-redux";

const Leaves = () => {
  const Leaves = useSelector((state) => state.Leaves);
  const { pl, cl } = Leaves;

  return (
    <div>
      <div>{pl}</div>
      <div>{cl}</div>
    </div>
  );
};

export default Leaves;
