import { Component, signal } from '@angular/core';
 
 
 
import { ReusableFormFieldComponent } from './reusable-form-field-component/reusable-form-field-component';

@Component({
  selector: 'app-root', 
  imports: [ ReusableFormFieldComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  SaveData(){
    console.log("Data Saved");
  }
   

}
