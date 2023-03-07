import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UseCallback from "./UseCallback/UseCallback";
import User from "./UseContext/User";
import UpdateStateCorrectly from "./UseEffect/UpdateStateCorrectly";
import UseEffect from "./UseEffect/UseEffect";
import UseEffectApiReq from "./UseEffect/UseEffectApiReq";
import UseEffectCleanUp from "./UseEffect/UseEffectCleanUp";
import UseEffectDependency from "./UseEffect/UseEffectDependency";
import UseImperativeHandle from "./UseImperativeHandle/UseImperativeHandle";
import UseLayoutEffect from "./UseLayoutEffect/UseLayoutEffect";
import UseMemo from "./UseMemo/UseMemo";
import UseReducer from "./UseReducer/UseReducer";
import UseRef from "./UseRef/UseRef";
import UseState from "./UseState/UseState";
import { Home } from "./Home";

function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Link to="/users/1">Show users</Link>} />
          <Route path="/users/:id" element={<UseEffectApiReq />} />
        </Routes>
      </Router> */}
      <Home />

      <ToastContainer />
    </div>
  );
}

export default App;
