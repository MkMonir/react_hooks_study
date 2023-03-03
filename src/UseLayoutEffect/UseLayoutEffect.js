import { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffect = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Use Effect";
  }, []);

  return (
    <div>
      <input
        style={{
          width: "300px",
          height: "50px",
          border: "1px solid #999",
          padding: "10px",
          fontSize: "16px",
        }}
        type="text"
        placeholder="type"
        ref={inputRef}
        value="Layout "
      />
    </div>
  );
};

export default UseLayoutEffect;
