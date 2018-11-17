const initialState = {
    counter: 0
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ONE':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'MINUS_ONE':
            return {
                ...state,
                counter: state.counter - 1
            }
    
        default:
            break;
    }
    return state
}

export default rootReducer