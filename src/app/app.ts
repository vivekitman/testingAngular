import { Component, inject, signal } from '@angular/core';
 
 
import { toSignal } from '@angular/core/rxjs-interop';
import { UserService } from './services/user-service';
import { User } from './Models/user';
 
 
 
 
 
 

@Component({
  selector: 'app-root', 
  imports: [  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

   userService = inject(UserService);

 
  users = toSignal<User[]>( this.userService.getUsers())

  
}
