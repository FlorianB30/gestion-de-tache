import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskLineComponent } from '../../components/task-line/task-line.component';
import { TaskBoxComponent } from '../../components/task-box/task-box.component';

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
  projects = [
    {
      project_id: 1,
      name: 'Project 1',
      tasks: [
        {
          task_id: 1,
          title: 'tache 1',
          createdate: '10/11/2024',
          deadline: '12/12/2024',
          timeExpected: 10,
          timeDone: 1,
          state: 'Commencée'
        },
        {
          task_id: 3,
          title: 'tache 3',
          createdate: '10/12/2024',
          deadline: '02/02/2024',
          timeExpected: 1,
          timeDone: 0.5,
          state: 'Commencée'
        }
      ]
    },
    {
      project_id: 2,
      name: 'Project 2',
      tasks: [
        {
          task_id: 2,
          title: 'tache 2',
          createdate: '10/11/2024',
          deadline: '12/12/2024',
          timeExpected: 10,
          timeDone: 1.25,
          state: 'Commencée'
        },
        {
          task_id: 6,
          title: 'tache 6',
          createdate: '10/12/2024',
          deadline: '02/02/2024',
          timeExpected: 1,
          timeDone: 0,
          state: 'A faire'
        }
      ]
    }
  ]
}
