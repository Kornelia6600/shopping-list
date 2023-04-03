import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent {

  productName: string = '';
  taskName: string = '';
  quantity: number = null!;
  price: number = null!;
  // editMode = false;

  config: { [key: string]: string } | null = null;

  @Input()
  tasks!: Task[]

  constructor() {
    this.config = {
      clear: 'Wyczyść listę',
    };
  }

  clearTasks() {
    this.tasks = [];
  }

  markTask(task: Task) {
    task.mark = true;
    this.sortList();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((e) => e !== task);
  }

  private sortList() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.mark === b.mark ? 0 : a.mark ? 1 : -1
    );
  }
}
