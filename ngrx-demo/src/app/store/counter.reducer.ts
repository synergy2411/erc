import * as counterActions from './counter.action';

const initialState = {
    counter: 0
}
export function counterReducer(state = initialState, action: counterActions.actionCounter) {
    switch (action.type) {
        case counterActions.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case counterActions.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case counterActions.ADD_NUMBER :
            return {
                ...state,
                counter : state.counter + action.payload
            }
        case counterActions.SUBSTRACT_NUMBER : 
            return {
                ...state,
                counter : state.counter - action.payload
            }
        default:
            break;
    }
    return state;
}