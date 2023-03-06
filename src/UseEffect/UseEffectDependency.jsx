import { useEffect, useState } from "react";

//  UseEffect run after the whole component rendered

const UseEffectDependency = () => {
  const [name, setName] = useState("");
  const [state, setState] = useState({
    name: "",
    selected: false,
  });

  useEffect(() => {
    console.log("The state has changed, UseEffect runs!");
  }, [state]);

  const handleName = () => {
    setState({ ...state, name });
  };

  const handleSelect = () => {
    setState({ ...state, selected: true });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        gap: "10px",
      }}
    >
      <input
        type="text"
        className="input"
        style={{ width: "100%" }}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn" onClick={handleName}>
        Add Name
      </button>
      <button className="btn" onClick={handleSelect}>
        Select
      </button>
      {`{name : ${state.name}, selected : ${state.selected}}`}
    </div>
  );
};

export default UseEffectDependency;
