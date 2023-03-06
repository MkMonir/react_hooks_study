import React, { useCallback, useState } from "react";
import Child from "./Child";

const UseCallback = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hey React");

  const returnComment = useCallback(
    (val) => {
      return data + val;
    },
    [data]
  );

  return (
    <div>
      <Child returnComment={returnComment} />
      <button className="btn" onClick={() => setToggle((prev) => !prev)}>
        Toggle
      </button>
      {toggle && <h2>Toggle</h2>}
    </div>
  );
};

export default UseCallback;
