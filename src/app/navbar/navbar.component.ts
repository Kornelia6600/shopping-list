import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  config: { [key: string]: string } | null = null;

  constructor(private router: Router) {
    this.config = {
      title: 'Lista zakupów',
    };
  }

  switchToLoginPage(){
      console.log('switchToLoginPage - click')
      this.router.navigate(['/login']);
  }
}
