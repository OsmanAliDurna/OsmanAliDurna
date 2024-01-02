const init_state = [];

export const todoReducer = (state = init_state, action) => {
    switch (action.type) {
        case "EKLE":
            return [...state, action.payload]

        default:
            return init_state;
    }
};