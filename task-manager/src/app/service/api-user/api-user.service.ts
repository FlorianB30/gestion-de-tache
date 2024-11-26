import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';

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
    return true
  }
}
