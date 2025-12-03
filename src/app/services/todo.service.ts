import { Todo } from './../models/todo.entity';
import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly _items = signal<Array<Todo>>([]);

  constructor(){
    this.load();

    effect(() => {
      const todos = this._items();
      localStorage.setItem('todos', JSON.stringify(todos));
    })
  }

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

  load(){
     const _storageTodos = localStorage.getItem('todos');
     if(_storageTodos){
      const todos: Array<Todo> = JSON.parse(_storageTodos);
      this._items.set(todos);
     } else {
      this._items.set([]);
     }
  }

  readonly items = this._items.asReadonly();
}
