import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  config: { [key: string]: string } | null = null;

  constructor() {
    this.config = {
      title: 'Lista zakupów',
    };
  }
}
