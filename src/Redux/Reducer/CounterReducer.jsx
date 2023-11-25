const counterState = {
    count: 0
};

export const CounterReducer = (state = counterState, action) => {
    switch (action.type) {
        case 'Increment':
            return {
                ...state,
                count: state.count + 1
            };
        case 'Decrement':
            return {
                ...state,
                count: state.count > 0 ? state.count - 1 : 0      
            };
        case 'Reset':
            return {
                ...state,
                count: 0
            };
        default:
            return state;
    }
};
