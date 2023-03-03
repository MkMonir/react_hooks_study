import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((_, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    btnToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button
        className="btn"
        style={{ fontSize: "35px" }}
        onClick={() => setToggle(!toggle)}
      >
        Button from child{" "}
      </button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
