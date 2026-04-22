import { Component , input ,output } from '@angular/core';

@Component({
  selector: 'app-reusable-form-field-component',
  imports: [],
  templateUrl: './reusable-form-field-component.html',
  styleUrl: './reusable-form-field-component.css',
})
export class ReusableFormFieldComponent {
 label = input<string>();
  // value = input<string>();
  type = input<string>('text');
  valueChange = output<string>();

  onInput(value:string){
    console.log('Child Value:',value);
    this.valueChange.emit(value);
}
}
