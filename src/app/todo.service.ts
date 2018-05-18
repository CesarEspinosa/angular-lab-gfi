import { Injectable } from '@angular/core';
import {Todo} from './models/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    {
      title: 'Primer Todo', 
      description: 'Esta es la descripción', 
      status: 'pending'
    },
    {
      title: 'Segundo Todo', 
      description: 'Esta es la descripción', 
      status: 'pending'
    },
    {
      title: 'Tercer Todo', 
      description: 'Esta es la descripción', 
      status: 'pending'
    }
  ]; 
  constructor() { }

  getTodos(){
    return this.todos; 
  }
}
