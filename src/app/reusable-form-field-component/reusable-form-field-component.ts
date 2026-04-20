import { Component , input } from '@angular/core';

@Component({
  selector: 'app-reusable-form-field-component',
  imports: [],
  templateUrl: './reusable-form-field-component.html',
  styleUrl: './reusable-form-field-component.css',
})
export class ReusableFormFieldComponent {
 lebal= input<string>();
value= input<string>();
valueChange= input<string>('Text');
}
