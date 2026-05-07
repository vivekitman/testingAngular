import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Models/Iuser';

@Injectable({
  providedIn: 'root',
})
export class User  {




   apiURL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<IUser[]>(this.apiURL);
  }
  
}
1