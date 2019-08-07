import { Action } from '@ngrx/store';

export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export class AddNewTodo implements Action{
    readonly type = ADD_TODO;
    constructor(public payload : {label : string, status : string}){}
}
export class EditTodo implements Action{
    readonly type = EDIT_TODO;
    constructor(public payload : {todo : {label : string, status : string}, index : number}){}
}
export class DeleteTodo implements Action{
    readonly type = DELETE_TODO;
    constructor(public payload : number){}
}

export type actionTodos = AddNewTodo | EditTodo | DeleteTodo;