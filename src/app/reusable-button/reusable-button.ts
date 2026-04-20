import { Component,input, output } from '@angular/core';

@Component({
  selector: 'app-reusable-button',
  imports: [],
  templateUrl: './reusable-button.html',
  styleUrl: './reusable-button.css',
})
export class ReusableButton {

  lebal= input<string>();
  clicked = output<void>();

}
