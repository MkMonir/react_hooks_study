import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  return (
    <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
      <input className="input" placeholder="Type something" ref={inputRef} />
      <button
        className="btn"
        onClick={() => {
          console.log(inputRef.current.value);
          inputRef.current.focus();
        }}
      >
        Click
      </button>
    </div>
  );
};

export default UseRef;
