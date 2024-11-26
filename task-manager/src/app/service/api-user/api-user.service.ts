import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';
import * as Cookie from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  constructor() { }

  async registerUser(email: string, password: string): Promise<boolean> {
    password = await bcrypt.hash(password, 60)
    return true
  }

  logUser(email: string, password: string): boolean {
    // Cookie.set('taskmanager', JSON.stringify({ email: email, isConnected: true }), { expires: 1 });
    return true
  }
}
