import { useReducer } from "react";

const UseReducer = () => {
  const initialState = {
    count: 0,
    showText: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "PLUS":
        return {
          ...state,
          count: state.count + 1,
        };
      case "MINUS":
        return {
          ...state,
          count: state.count - 1,
        };
      case "SHOW_TEXT":
        return {
          ...state,
          showText: !state.showText,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="showText">
        {state.showText && <h3>Show Text</h3>}{" "}
        <button onClick={() => dispatch({ type: "SHOW_TEXT" })}>
          {state.showText ? "Hide" : "Show"}
        </button>
      </div>
      <div className="count">
        <button className="plus" onClick={() => dispatch({ type: "PLUS" })}>
          +
        </button>
        <p className="value">{state.count}</p>
        <button className="minus" onClick={() => dispatch({ type: "MINUS" })}>
          -
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
