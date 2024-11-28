import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ApiUserService } from '../api-user/api-user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiProjectService {
  apiUrl: string = 'http://localhost:3000/projects'

  constructor(private api: ApiUserService) { }

  async createProject(name: string): Promise<boolean> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, project_states_id: 1 }),
    });
    return true
  }
}
