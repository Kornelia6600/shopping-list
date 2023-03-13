import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  config: {[key:string]: string;} | null = null;

  constructor(){
    this.config = {
      footer: '© Lista zakupów, All rights reserved.',
      date: new Date().toDateString(),
      
    };
  }

}
