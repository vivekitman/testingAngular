import { Component, signal } from '@angular/core';
import {  RouterLink, RouterOutlet  } from '@angular/router';
import { User } from './user';
 
 
 
 
 

@Component({
  selector: 'app-root', 
  imports: [  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

users: any[] = [];

  constructor(private userService: User){}

  ngOnInit() {
    this.userService.getUsers().subscribe((data: any)=>{
      this.users = data;
       
    })
  }

  

}
