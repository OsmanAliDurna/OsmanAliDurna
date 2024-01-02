const initiailState = {
  count: 0,
};

export const INC = "INC";
export const CLR = "CLR";
export const DEC = "DEC";

export const increment = () => ({ type: INC });
export const clear = () => ({ type: CLR });
export const decrement = () => ({ type: DEC });

export const counterReducer = (state = initiailState, action) => {
  switch (action.type) {
    case INC:
      return { count: state.count + 1 };
    case DEC:
      return { count: state.count - 1 };
    case CLR:
      return initiailState;
    default:
      return state;
  }
};
