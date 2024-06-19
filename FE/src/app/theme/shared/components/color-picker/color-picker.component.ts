import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ColorPickerService } from 'ngx-color-picker';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent {
  color: string = '#000000';

  @ViewChild('colorInput', { static: false }) colorInput: ElementRef;

  openColorPicker() {
    this.colorInput.nativeElement.click();
  }

  onColorChange(newColor: string) {
    this.color = newColor;
  }

  // color: string = '#000000'; // default color

  // openColorPicker() {
  //   const colorInput: HTMLElement | null =
  //     document.querySelector('.color-input');
  //   if (colorInput) {
  //     colorInput.click();
  //   }
  // }

  // onColorChange(newColor: string) {
  //   this.color = newColor;
  // }
}
