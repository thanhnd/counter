
const redux = require('redux')

// reducer
const initialState = {
    counter: 0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ONE':
            return {
                ...state,
                counter: state.counter + 1
            }

        case 'ADD_VALUE':
            return {
                ...state,
                counter: state.counter + action.value
            }

        default:
        break
    }
    return state
}

// store
const store = redux.createStore(rootReducer)
console.log("State: ", store.getState())


// dispatch actions
store.dispatch({type: 'ADD_ONE'})
console.log("State: ", store.getState())
store.dispatch({type: 'ADD_VALUE', value: 10})
console.log("State: ", store.getState())