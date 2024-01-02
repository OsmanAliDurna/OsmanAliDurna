const initiailState = {
  count: 0,
};

export const counterReducer = (state = initiailState, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    case "CLR":
      return initiailState;
    default:
      return state;
  }
};
