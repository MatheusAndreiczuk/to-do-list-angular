import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TodoService } from '../../../services/todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [MatIcon, FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  readonly todos = inject(TodoService);
  todoTitle = '';

  addTodo(event: Event, value: string) {
    event.preventDefault();
    
    const title = value.trim();
    if(!title) return;

    this.todos.add(title);
    this.todoTitle = '';
  }
}
