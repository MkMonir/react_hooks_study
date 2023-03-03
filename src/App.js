import "./App.css";
import User from "./UseContext/User";
import UseEffect from "./UseEffect/UseEffect";
import UseImperativeHandle from "./UseImperativeHandle/UseImperativeHandle";
import UseLayoutEffect from "./UseLayoutEffect/UseLayoutEffect";
import UseMemo from "./UseMemo/UseMemo";
import UseReducer from "./UseReducer/UseReducer";
import UseRef from "./UseRef/UseRef";
import UseState from "./UseState/UseState";

function App() {
  return (
    <div>
      <h1>
        <UseMemo />
      </h1>
    </div>
  );
}

export default App;
