import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiTaskService {

  constructor() { }

  createTask(project: number, title: string, time: number, description: string, tags: string, deadline: string, user: number): boolean {
    return true
  }
}
