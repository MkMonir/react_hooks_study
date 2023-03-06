import React, { useEffect, useState } from "react";

const UpdateStateCorrectly = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Effect");
    setInterval(() => {
      // ALWAYS CHANGE THE PREVIOUS STATE NOT MAIN STATE
      setNumber((prev) => prev + 1);
    }, 1000);
  }, []);

  return <div style={{ textAlign: "center" }}>{number}</div>;
};

export default UpdateStateCorrectly;
