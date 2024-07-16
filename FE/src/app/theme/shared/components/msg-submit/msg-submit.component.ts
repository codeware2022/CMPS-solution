import { Component } from '@angular/core';

@Component({
  selector: 'app-msg-submit',
  templateUrl: './msg-submit.component.html',
  styleUrls: ['./msg-submit.component.scss'],
})
export class MsgSubmitComponent {
  showModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  show(): void {
    this.showModal = true;
  }

  hide(): void {
    this.showModal = false;
  }
}
