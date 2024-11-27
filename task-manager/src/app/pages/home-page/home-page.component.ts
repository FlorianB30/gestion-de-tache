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

  projects = [
    {
      project_id: 1,
      name: 'Projet 1',
      tasks: [
        {
          task_id: 1,
          title: 'Tache 1',
          createdate: '12/12/2024',
          deadline: '02/02/2024',
          timeDone: 0.5,
          timeExpected: 10,
          state: 'Commencée'
        }
      ]
    }
  ]

  deleteCookie() {
    Cookie.remove('taskmanager')
  }
}
