import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as counterActions from './store/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter : number = null;
  
  constructor(private store : Store<any>){}
  increment(){
    this.store.dispatch(new counterActions.IncreaseCounter());  
  }
  decrement (){
    this.store.dispatch(new counterActions.DecreaseCounter());
  }
  addNumber(num: number){
    this.store.dispatch(new counterActions.AddNumberCounter(num));
  }
  substractNumber(num: number){
    this.store.dispatch(new counterActions.SubstractNumberCounter(num))
  }
  ngOnInit() {
    this.store.select('counterReducer')
      .subscribe(state => {
        this.counter = state.counter;
      });
  }
}
