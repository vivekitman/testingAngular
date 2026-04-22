import { Component, signal } from '@angular/core';
 
 
 
import { ReusableFormFieldComponent } from './reusable-form-field-component/reusable-form-field-component';

@Component({
  selector: 'app-root', 
  imports: [ ReusableFormFieldComponent ],
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
