import { useRef } from "react";
import Button from "./Button";

const UseImperativeHandle = () => {
  const btnRef = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        gap: "10px",
      }}
    >
      <button
        style={{ fontSize: "35px" }}
        className="btn"
        onClick={() => btnRef.current.btnToggle()}
      >
        Button from parent
      </button>
      <Button ref={btnRef} />
    </div>
  );
};

export default UseImperativeHandle;
