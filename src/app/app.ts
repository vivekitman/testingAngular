import { Component, inject, signal } from '@angular/core';
 
 
import { toSignal } from '@angular/core/rxjs-interop';
 
 
 
 
 
 

@Component({
  selector: 'app-root', 
  imports: [  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  userService = inject(this.User);

  users   = toSignal <User[]>(this.userService.getUsers());
}
