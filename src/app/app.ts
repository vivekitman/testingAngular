import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
 
 
 

@Component({
  selector: 'app-root', 
  imports: [  RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

   email = '';

  onEmailChange(value: string){
    console.log('Email:', value);
    this.email = value;
  }

}
