import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private _users$ = new BehaviorSubject<User[]>([]);
  constructor() { }

  public get users$() {
    return this._users$.asObservable();
  }
  public AddUser(user: User) {
    this.users.push(user);
    this._users$.next([...this.users])
  }
}
export class User {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

}