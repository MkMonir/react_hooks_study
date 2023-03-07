import React from "react";
import useDocumentTitle from "./CustomHooks/useDocumentTitle";
import useFetch from "./CustomHooks/useFetch";
import useLocalStorage from "./CustomHooks/useLocalstorage";
import useNetStatus from "./CustomHooks/useNetStatus";
import { useRandomColor } from "./CustomHooks/useRandomColor";
import useWindowResize from "./CustomHooks/useWindowResize";

export const Home = () => {
  const onSmallScreen = useWindowResize(768);
  const isOnline = useNetStatus();
  const { color, changeColor } = useRandomColor();
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  useDocumentTitle("React hooks!");
  const [name, setName] = useLocalStorage("name", "John");

  return (
    <div
      style={{
        background: "#" + color,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h2>{`You are browsing on ${
        onSmallScreen ? "small" : "large"
      } screen`}</h2>

      {isOnline ? <h1>You are online</h1> : <h1>You are offline</h1>}

      <button
        className="btn"
        style={{ width: "200px" }}
        onClick={() => changeColor()}
      >
        Change color
      </button>

      <div>
        {loading && <h2>Loading</h2>}
        {data?.map((user) => (
          <h3 key={user.id}>{user.name}</h3>
        ))}
      </div>

      <input
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
