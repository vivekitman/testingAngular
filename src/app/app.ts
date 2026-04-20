import { Component, signal } from '@angular/core';
 
 
import { ReusableButton } from './reusable-button/reusable-button';

@Component({
  selector: 'app-root', 
  imports: [ ReusableButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  SaveData(){
    console.log("Data Saved");
  }
   

}
