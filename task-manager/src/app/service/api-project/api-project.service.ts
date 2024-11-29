import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ApiUserService } from '../api-user/api-user.service';
import Cookie from 'cookiejs';

@Injectable({
  providedIn: 'root'
})
export class ApiProjectService {
  apiUrl: string = 'http://localhost:3000/projects'

  constructor(private api: ApiUserService) { }

  async createProject(name: string) {
    await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, project_states_id: 1, user_id: this.getUserId() }),
    });
  }

  async getAllProjects(): Promise<any> {
    return await fetch(this.apiUrl + '/myprojects/' + this.getUserId(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        return data
      })
      .catch((error) => {
        console.error("Erreur lors de la requête :", error);
      });
  }

  deleteProject(project_id: number) {
    fetch(this.apiUrl + '/' + project_id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  getUserId(): number {
    let user = Cookie.get('taskmanager')
    if (user === '') return 0
    const userObj = JSON.parse(user.toString())
    if (userObj.isConnected) {
      return userObj.user_id
    }
    return 0
  }
}
