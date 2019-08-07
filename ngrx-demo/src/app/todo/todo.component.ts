import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as todoActions from '../store/todo.actions';
import * as Immutable from 'immutable';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [`
    .tdata:hover{
      font-size : 1.1em;
      cursor : pointer;
    }
  `]
})
export class TodoComponent implements OnInit {

  filteredStatus = "all";

  todos = [];
  showTodoForm : boolean = false;
  editTodo : boolean = false;
  selectedTodo : {label : string, status : string};
  // selectedTodo = Immutable.Map({label : "", status : ""});
  selectedTodoIndex : number;

  onSelectTodo(todo : {label : string , status : string}, index: number){
    this.editTodo = true;
    this.selectedTodo = {...todo};
    this.selectedTodoIndex = index;
    this.showTodoForm = false;
  }

  onDelete(index: number){
    this.store.dispatch(new todoActions.DeleteTodo(index));
  }
  
  constructor(private store : Store<any>) { }

  ngOnInit() {
    this.store.select("todoReducer")
      .subscribe(todoState => {
        this.todos = todoState.todos;
      })
  }

}
