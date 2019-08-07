import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  filteredStatus ="";
  
  todos  =[{
    label : "Renew insurance",
    status : "done"
  },{
    label : "Pot the plant",
    status : "pending"
  },{
    label : "Buy groceries",
    status : "pending"
  },{
    label : "Read the books",
    status : "done"
  }]

  addNewTodo(){
    this.todos.push({label : "New Taks", status : "pending"});
  }

  constructor() { }

  ngOnInit() {
  }

}
