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

    default:
      return state;
  }
};

export default GameReducer;
