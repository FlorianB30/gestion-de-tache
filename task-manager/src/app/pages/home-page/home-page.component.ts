import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Cookie from 'cookiejs';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private router: Router) { }

  deleteCookie() {
    Cookie.remove('taskmanager')
    this.router.navigate(['/login'])
  }
}
