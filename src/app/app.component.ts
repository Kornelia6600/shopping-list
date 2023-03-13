import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { retry } from 'rxjs';
import { Task } from './task';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  

  taskName: string='';
  quantity: number = null!;
  price: number = null!;
  // editMode = false;
  
  config: {[key:string]: string;} | null = null;
  
  tasks: Task[] = [
    {name: 'buraki',
    quantity: 0.21,
    value: 1,
    mark: false
  },
  {
    name: 'ziemiaki',
    quantity: 1.34,
    value: 2,
    mark: false
  }
  ];
  
  constructor(){
    this.config = {
      clear: 'Wyczyść listę'
    };
  }

  clearTasks(){
    this.tasks = [];
  }
  
 
  // switchEditMode(){
  //   this.editMode = !this.editMode;
  // }


  markTask(task: Task){
    task.mark = true;
    this.sortList();
  }

  deleteTask(task: Task){
    this.tasks = this.tasks.filter(e => e !== task);
  }

  private sortList(){
    this.tasks = this.tasks.sort((a: Task, b: Task) => 
    a.mark === b.mark ? 0 : a.mark ? 1 : -1 )
  }

}
