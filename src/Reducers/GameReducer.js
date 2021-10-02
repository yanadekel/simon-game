const GameReducer = (state, action) => {
  switch (action.type) {
    case "SET_GAME":
      return {
        ...state,
        gameOn: action.payload.gameOn,
      };
    case "SET_GAME_ON_STATES":
      return {
        ...state,
        gameOnStates: action.payload.gameOnStates,
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.payload.users,
      };
    
    default:
      return state;
  }
};

export default GameReducer;
