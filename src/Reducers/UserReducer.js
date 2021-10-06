const UserReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USERNAME":
      return { ...state, name: action.payload.name };
    case "ADD_SCORE":
      return { ...state, scores: action.payload.scores };

    case "SET_USERS":
      return {
        ...state,
        users: action.payload.users,
      };
    case "FILTER_USER":
      return state.filter((user) => user.id === action.id);

    default:
      return state;
  }
};

export default UserReducer;
