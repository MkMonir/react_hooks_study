const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    case "GET_USER":
      return { ...state };
    default:
      return state;
  }
};

export default userReducer;
