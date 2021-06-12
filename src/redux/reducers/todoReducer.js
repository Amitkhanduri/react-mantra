const INITIAL_STATE = {
  todo: {},
  errors: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TODO_FAILURE":
      return { ...state, errors: action.payload };
    case "TODO_RECEIVED":
      return { ...state, todo: action.payload };
    default:
      return state;
  }
};
