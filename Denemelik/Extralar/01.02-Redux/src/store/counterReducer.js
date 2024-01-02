const int_state = {
  count: 5,
};

export const counterReducer = (state = int_state, action) => {
  switch (action.type) {
    case "INC":
      return {
        count: state.count + 1,
      };
    case "DEC":
      return {
        count: state.count - 1,
      };
    case "RES":
      return {
        count: 0,
      };

    default:
      return int_state;
  }
};
