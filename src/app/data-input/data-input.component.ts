import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css'],
})
export class DataInputComponent {
  //productName: string = '';
 // quantity: number = null!;
  //price: number = null!;

  dataFormGroup: FormGroup;

  constructor(formBuilder: FormBuilder){
    this.dataFormGroup = formBuilder.group({
      produktName: '',
      quantity: '',
      price: ''
    })
  }

  @Input()
  tasks!: Task[];

  onClickAddTask() {
    //sprawdzenie czy zostało coś wpisane czy nie:
    //jesli tak to dodaj produkt
    //jeśli nie to wyświetl alert

    if (this.dataFormGroup.value.productName != '' && this.dataFormGroup.value.quantity != '' && this.dataFormGroup.value.price != '') {
      this.createTask();
    } else {
      alert('wpisz wartości');
    }
  }

  clearForm() {
    (this.dataFormGroup.value.productName = null!), (this.dataFormGroup.value.quantity = null!), (this.dataFormGroup.value.price = null!);
  }

  createTask() {
    const task: Task = {
      name: this.dataFormGroup.value.productName,
      quantity: this.dataFormGroup.value.quantity,
      value: this.dataFormGroup.value.price,
      mark: false,
    };

    this.tasks.push(task);
    this.clearForm();
  }

}
