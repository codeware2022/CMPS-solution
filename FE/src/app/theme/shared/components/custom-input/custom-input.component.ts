import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() inputId: string = 'custom-input';
  @Input() value: string = '';  
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInput(): void {
    this.valueChange.emit(this.value);
  }
}
