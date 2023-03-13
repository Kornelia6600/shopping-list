import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent {

  productName: string='';
  quantity: number = null!;
  price: number = null!;

  @Input()
  tasks!: Task[];


  onClickAddTask(){
    //sprawdzenie czy zostało coś wpisane czy nie:
    //jesli tak to dodaj produkt
    //jeśli nie to wyświetl alert

    if (this.productName != '' && this.quantity != null
    && this.price != null){
      this.createTask()
    }
    else {
      alert('wpisz wartości')
    }

  }

  clearForm(){
    this.productName = null!,
    this.quantity = null!,
    this.price = null!
  };

  createTask(){
    const task: Task = {
      name: this.productName,
      quantity: this.quantity,
      value: this.price,
      mark: false
    };

    this.tasks.push(task);
    this.clearForm();
  }


}
