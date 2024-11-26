import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as Cookie from 'js-cookie';

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
    // let user = Cookie.get('taskmanager')
    // console.log(user)
    // if (user === '') return false
    // const userObj = JSON.parse(user)
    // if (userObj.isConnected) {
    //   return true
    // }
    return true //false
  }
}
