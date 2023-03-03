import { useContext } from "react";
import UserContext from "./UserContext";

const User = () => {
  const { user, isAuthenticated, dispatch } = useContext(UserContext);

  //   console.log(user);

  return (
    <div>
      <h3>User</h3>

      <button
        className="btn"
        onClick={() => dispatch({ type: "SET_USER", payload: "CPL" })}
      >
        Add User
      </button>

      {isAuthenticated && <h5>User : {user}</h5>}
    </div>
  );
};

export default User;
