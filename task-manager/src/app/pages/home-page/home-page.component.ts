import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskBoxComponent } from '../../components/task-box/task-box.component';
import { TaskLineComponent } from '../../components/task-line/task-line.component';
import Cookie from 'cookiejs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    TaskLineComponent,
    TaskBoxComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private router: Router) { }
  deleteCookie() {
    Cookie.remove('taskmanager')
  }
}
