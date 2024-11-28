import { Injectable } from '@angular/core';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ApiTaskService {
  apiUrl: string = 'http://localhost:3000/tasks'

  constructor() { }

  async createTask(task: any): Promise<boolean> {
    const response = await fetch(this.apiUrl + '/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        project_id: task.project_id,
        title: task.title,
        user_id: task.user,
        description: task.description,
        tags: task.tags,
        time_expected: task.time,
        deadline: task.deadline,
        task_states_id: 1
      }),
    });
    const responseJson = await response.json()
    console.log(responseJson)
    const newTask = responseJson.task
    if (newTask !== undefined && newTask !== null) {
      return true
    }
    return false
  }
}
