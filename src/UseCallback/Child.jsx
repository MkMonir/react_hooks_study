import React, { useEffect } from "react";

const Child = ({ returnComment }) => {
  useEffect(() => {
    console.log("Comment received");
  }, [returnComment]);

  return <div>{returnComment("!")}</div>;
};

export default Child;
