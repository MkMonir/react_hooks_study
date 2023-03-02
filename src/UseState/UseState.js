import { useState } from "react";

const UseState = () => {
  const [showText, setShowText] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="showText">
        {showText && <h3>Show Text</h3>}{" "}
        <button onClick={() => setShowText(!showText)}>
          {showText ? "Hide" : "Show"}
        </button>
      </div>
      <div className="count">
        <button className="plus" onClick={() => setCount(count + 1)}>
          +
        </button>
        <p className="value">{count}</p>
        <button className="minus" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default UseState;
