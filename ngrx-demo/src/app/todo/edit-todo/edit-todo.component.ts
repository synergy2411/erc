import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import * as todoActions from '../../store/todo.actions';
import * as Immutable from 'immutable';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  @Input('selectedTodo') selectedTodo : {label : string, status : string}
  @Input('index') index : number;
  
  constructor(private store : Store<any>) { }

  updateStatus(){
    // console.log(this.selectedTodo);
    this.store.dispatch(new todoActions.EditTodo({
      todo : this.selectedTodo,
      index : this.index}))
  }

  ngOnInit() {
    console.log(this.selectedTodo);
    
  }

}
