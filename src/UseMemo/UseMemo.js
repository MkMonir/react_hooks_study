import { useEffect, useState, useMemo } from "react";

const UseMemo = function () {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div className="App">
      <div> {getLongestName} </div>

      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
};

export default UseMemo;
