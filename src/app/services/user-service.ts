import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  

     apiURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers() {
     
    return this.http.get<User[]>(this.apiURL);
  }
   addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL, user);
}


 //Update an existing user(PUT API)
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiURL}/${id}`, user);

}

//PATCH API to update part of the user data
  updateUserStatus(id: number, status:boolean): Observable<User> {
    return this.http.patch<User>(`${this.apiURL}/${id}`, { isActive: status });
}
}