import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

class TodoItem {
  constructor(
    public label: string,
    public id: number = Math.random(),
    public done: boolean = false
  ) {}

  toggle() {
    this.done = !this.done;
    return this
  }
}

@Component({
  selector: 'nao-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  newTodo: string = '';
  items: TodoItem[] = [];

  onAddTodo(label: string): void {
    const todo = new TodoItem(label);
    this.items = [...this.items, todo];
    this.newTodo = '';
  }

  onRemoveTodo(id: number) {
    this.items = [...this.items].filter((item) => item.id !== id);
  }

  onTodoToggle(id: number) {
    const itemsClone = this.items.map((item) => {
      return item.id === id ? item.toggle() : item;
    });
    this.items = itemsClone;
    console.log(this.items);
  }
}

// Create an input field where the user can enter a new to-do item.
// When the user submits the to-do item, add it to the list of to-do items.
// Display the list of to-do items on the screen.
// Each to-do item in the list should have a button to remove the item from the list.
// Create a counter showing the total number of to-do items in the list.
// (Optional) Implement a simple filter to show only completed or incomplete tasks.
