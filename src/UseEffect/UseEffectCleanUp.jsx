import React, { useEffect, useState } from "react";

const UseEffectCleanUp = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Effect");
    const interval = setInterval(() => {
      // ALWAYS CHANGE THE PREVIOUS STATE NOT MAIN STATE
      setNumber((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div style={{ textAlign: "center" }}>{number} times</div>;
};

export default UseEffectCleanUp;
