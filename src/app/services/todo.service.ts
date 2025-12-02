import { Todo } from './../models/todo.entity';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly _items = signal<Array<Todo>>([
    { id: crypto.randomUUID(), title: 'Learn Angular Signals', completed: false },
    { id: crypto.randomUUID(), title: 'Build a To-Do App', completed: false },
    { id: crypto.randomUUID(), title: 'Master TypeScript', completed: true },
  ]);

  toggle(id:string) {
    this._items.update((items) => 
      items.map((item) => 
        item.id === id ? {...item, completed: !item.completed } : item
      )
    )
  }

  remove(id: string){
    this._items.update((items) => items.filter((item) => item.id !== id));
  }

  add(title: string){
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    };
    this._items.update((items) => [...items, newTodo]);
  }

  readonly items = this._items.asReadonly();
}
