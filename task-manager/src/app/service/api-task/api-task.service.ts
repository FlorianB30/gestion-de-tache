import { Injectable } from '@angular/core';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ApiTaskService {
  apiUrl: string = 'http://localhost:3000/tasks'

  constructor() { }

  async createTask(task: any) {
    const response = await fetch(this.apiUrl + '/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        project_id: task.project,
        title: task.title,
        user_id: task.user,
        description: task.description,
        tags: task.tags,
        time_expected: task.time,
        deadline: task.deadline,
        task_states_id: 1,
        priority: task.priority
      }),
    });
  }
}
