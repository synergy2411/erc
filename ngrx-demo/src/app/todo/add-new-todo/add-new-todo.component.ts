import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as todoActions from '../../store/todo.actions';

@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.css']
})
export class AddNewTodoComponent implements OnInit {

  todo : {label : string, status : string} = {label : "", status : ""} ;

  constructor(private store : Store<any>) { }

  ngOnInit() {
  }

  addNewItem(){
    this.store.dispatch(new todoActions.AddNewTodo(this.todo));
    this.todo = {label : "", status : ""};
  }

}

