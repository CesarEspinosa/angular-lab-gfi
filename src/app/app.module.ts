import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import {TodoService} from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    TodoComponent,
    TodoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
