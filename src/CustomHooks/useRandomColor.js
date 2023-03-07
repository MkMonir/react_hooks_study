import { useEffect, useState } from "react";

export const useRandomColor = () => {
  const [color, setColor] = useState("");

  const changeColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };

  useEffect(() => {
    changeColor();
  }, []);

  return { color, changeColor };
};
