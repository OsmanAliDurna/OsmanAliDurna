const initiailState = {
  todoList: [
    { id: new Date().getTime(), text: "Learn Redux", completed: false },
  ],
};

export const ADD = "ADD";
export const CLR = "CLR";
export const DEL = "DEL";
export const CMP = "CMP";

export const addTodo = (text) => ({
  type: ADD,
  payload: text
});
export const clearTodo = () => ({ type: CLR });
export const completion = () => ({ type: CMP });
export const deletion = () => ({ type: DEL });

export const todoReducer = (state = initiailState, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, ...payload };
    case DEL:
      return { ...state, ...payload };
    case CMP:
      return { ...state, ...payload };
    case CLR:
      return initiailState;
    default:
      return state;
  }
};
