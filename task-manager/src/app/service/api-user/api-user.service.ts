import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import Cookie from 'cookiejs';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  apiUrl = 'http://localhost:3000/users'
  isBrowser!: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  async registerUser(mail: string, password: string): Promise<boolean> {
    await fetch(this.apiUrl + '/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mail, password }),
    });
    return true
  }

  logUser(email: string, password: string): boolean {
    Cookie.set('taskmanager', JSON.stringify({ email: email, isConnected: true }), { expires: 1 });
    return true
  }

  userIsConnected(): boolean {
    if (this.isBrowser) {
      let user = Cookie.get('taskmanager')
      console.log(user)
      if (user === '') return false
      const userObj = JSON.parse(user.toString())
      if (userObj.isConnected) {
        return true
      }
    }
    return false
  }
}
