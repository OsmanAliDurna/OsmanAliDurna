const initialState = {
  todoList: [
    { id: new Date().getTime(), text: "Learn Redux", completed: false },
  ],
};

export const ADD = "ADD";
export const CLRL = "CLRL";
export const DEL = "DEL";
export const TGL = "TGL";

export const addTodo = (payload) => ({ type: ADD, payload });
export const clearTodo = () => ({ type: CLRL });
export const toggleTodo = (payload) => ({ type: TGL, payload });
export const deleteTodo = (payload) => ({ type: DEL, payload });

//? Reducer
export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case DEL:
      return {
        todoList: state.todoList.filter((item) => item.id !== payload),
      };
    case TGL:
      return {
        todoList: state.todoList.map((e) =>
          e.id === payload ? { ...e, completed: !e.completed } : e
        ),
      };
    case CLRL:
      return initialState;
    default:
      return state;
  }
};
