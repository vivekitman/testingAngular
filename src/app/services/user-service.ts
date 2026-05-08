import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  

   apiURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getUsers() {
     
    return this.http.get<User[]>(this.apiURL);
  }
}
