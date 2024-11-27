import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Cookie from 'cookiejs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    if (!this.userIsConnected()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  userIsConnected(): boolean {
    let user = Cookie.get('taskmanager')
    console.log(user)
    if (user === '') return false
    const userObj = JSON.parse(user.toString())
    if (userObj.isConnected) {
      return true
    }
    return false
  }
}
