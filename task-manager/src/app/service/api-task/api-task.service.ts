import { Injectable } from '@angular/core';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ApiTaskService {
  apiUrl: string = 'http://localhost:3000/tasks'

  constructor() { }

  async createTask(task: any) {
    await fetch(this.apiUrl + '/', {
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

  async updateTask(task: any) {
    await fetch(this.apiUrl + '/' + task.task_id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: task.title,
        time_done: task.time_done,
        time_expected: task.time_expected,
        deadline: task.deadline,
      }),
    });
  }
}
