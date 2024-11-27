import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskBoxComponent } from '../../components/task-box/task-box.component';
import { TaskLineComponent } from '../../components/task-line/task-line.component';
import Cookie from 'cookiejs';
import { Router } from '@angular/router';
import { NewTaskBoxComponent } from '../../components/new-task-box/new-task-box.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    TaskLineComponent,
    TaskBoxComponent,
    NewTaskBoxComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  styleNewTaskForm: string = 'displayNone'
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

  constructor(private router: Router) { }

  changeStyle(event: any): void {
    this.styleNewTaskForm = event
  }

  openNewTaskForm() {
    this.styleNewTaskForm = ''
  }

  deleteCookie() {
    Cookie.remove('taskmanager')
  }
}
