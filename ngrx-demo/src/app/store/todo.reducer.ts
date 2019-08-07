import * as todoActions from './todo.actions';

const initialState = {
    todos: [{
        label: "Spile the milk",
        status: "done"
    }, {
        label: "buy the grocery",
        status: "pending"
    }],
    
}

export function todoReducer(state = initialState, action: todoActions.actionTodos) {
    switch (action.type) {
        case todoActions.ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        }
        case todoActions.EDIT_TODO: {
            let dupTodo = state.todos[action.payload.index];
            let updatedTodo= {
                ...dupTodo,
                ...action.payload.todo
            }
            let todos = [...state.todos];
            todos[action.payload.index] = updatedTodo;

            return {
                ...state,
                todos: todos
            }
        }
        case todoActions.DELETE_TODO: {

            let duplicatedTodos = [...state.todos];
            duplicatedTodos.splice(action.payload, 1);
            console.log("[DUP]", duplicatedTodos)
            return {
                ...state,
                todos: duplicatedTodos
            }
        }
        default: return { ...state }
    }
}