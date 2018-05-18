import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import {TodoViewComponent} from './todo-view/todo-view.component'; 
import {TodosComponent} from './todos/todos.component'; 
const routes: Routes = [
	{path: '', component: HomeComponent}, 
	{path: 'todos', component: TodosComponent},
	{path: 'todo/:id', component: TodoViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
