import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit{
  @Input() text: string = '';
  @Input() top: string = '0px';
  @Input() left: string = '0px';
  @Input() visible: boolean = false;

  ngOnInit(): void {
    console.log(this.top);
    console.log(this.left);
    debugger;
    
  }
}
