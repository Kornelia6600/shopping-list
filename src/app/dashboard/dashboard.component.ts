import { Component } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  productName: string = '';
  taskName: string = '';
  quantity: number = null!;
  price: number = null!;
  // editMode = false;

  config: { [key: string]: string } | null = null;

  tasks: Task[] = [
    { name: 'buraki', quantity: 0.21, value: 1, mark: false },
    {
      name: 'ziemiaki',
      quantity: 1.34,
      value: 2,
      mark: false,
    },
  ];

  constructor() {
    this.config = {
      clear: 'Wyczyść listę',
    };
  }

  clearTasks() {
    this.tasks = [];
  }


}
