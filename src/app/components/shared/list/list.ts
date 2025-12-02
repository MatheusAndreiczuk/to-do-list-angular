import { Component, inject } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-list',
  imports: [MatIcon],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  readonly todos = inject(TodoService);

  addTodo(event: Event, input: HTMLInputElement) {
    event.preventDefault();
    
    const title = input.value.trim();
    if(!title) return;

    this.todos.add(title);
    input.value = '';
  }
}
