import { Action } from '@ngrx/store';

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_NUMBER = "ADD_NUMBER";
export const SUBSTRACT_NUMBER = "SUBSTRACT_NUMBER";

export class IncreaseCounter implements Action{
    readonly type  = INCREMENT;
}

export class DecreaseCounter implements Action{
    readonly type  = DECREMENT;
}
export class AddNumberCounter implements Action{
    readonly type  = ADD_NUMBER;
    constructor(public payload : number ){}
}
export class SubstractNumberCounter implements Action{
    readonly type  = SUBSTRACT_NUMBER;
    constructor(public payload : number ){}
}

export type actionCounter = 
    IncreaseCounter | 
    DecreaseCounter | 
    AddNumberCounter | 
    SubstractNumberCounter;