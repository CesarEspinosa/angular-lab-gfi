import { Component, OnInit } from '@angular/core';
import {TodoService} from "./../todo.service";
import {Todo} from "./../models/todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] =[];
  constructor(
    private ts: TodoService
  ) { }

  ngOnInit() {
    this.todos= this.ts.getTodos();
  }

}
