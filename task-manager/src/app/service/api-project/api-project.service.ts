import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiProjectService {

  constructor() { }

  createProject(name: string): boolean {
    return true
  }
}
