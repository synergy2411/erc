import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { counterReducer } from './store/counter.reducer';
import { TodoComponent } from './todo/todo.component';
import { todoReducer } from './store/todo.reducer';
import { AddNewTodoComponent } from './todo/add-new-todo/add-new-todo.component';
import { EditTodoComponent } from './todo/edit-todo/edit-todo.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddNewTodoComponent,
    EditTodoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counterReducer : counterReducer, 
      todoReducer : todoReducer
    }),
    FormsModule, StoreDevtoolsModule.instrument()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
