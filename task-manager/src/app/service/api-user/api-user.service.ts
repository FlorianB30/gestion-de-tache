import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import Cookie from 'cookiejs';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  apiUrl = 'http://localhost:3000/users'
  isBrowser!: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,) { }

  async registerUser(mail: string, password: string) {
    await fetch(this.apiUrl + '/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mail, password }),
    });
  }

  async logUser(mail: string, password: string): Promise<boolean> {
    const response = await fetch(this.apiUrl + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mail, password }),
    });
    const responseJson = await response.json()
    const user = responseJson.user
    if (user !== undefined && user !== null) {
      Cookie.set('taskmanager', JSON.stringify({ email: user.mail, user_id: user.user_id, token: user.token, isConnected: true }), { expires: 1 });
      return true
    }
    return false
  }

  async getAllUsers(): Promise<any[]> {
    return await fetch(this.apiUrl, {
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

  userIsConnected(): boolean {
    if (this.isBrowser) {
      let user = Cookie.get('taskmanager')
      if (user === '') return false
      const userObj = JSON.parse(user.toString())
      if (userObj.isConnected) {
        return true
      }
    }
    return false
  }
}
