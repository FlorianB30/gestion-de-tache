import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Cookie from 'cookiejs';

@Component({
    selector: 'app-nav-bar',
    imports: [
        CommonModule
    ],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private router: Router) { }

  deleteCookie() {
    Cookie.remove('taskmanager')
    this.router.navigate(['/login'])
  }

  navigateToProjects() {
    this.router.navigate(['/'])
  }

  navigateToCalendar() {
    this.router.navigate(['/calendar'])
  }
}
