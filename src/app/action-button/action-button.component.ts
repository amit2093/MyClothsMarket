import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {

  showHide: boolean = false;
  isHovered: any; 
  @Input() segmentKey: any
  @Output() isHoveredOut = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendBack(){
    this.isHovered === this.segmentKey ? this.isHovered = '' : this.isHovered = this.segmentKey;
    this.isHoveredOut.emit(this.isHovered);
    console.log(this.isHovered);
    console.log(this.segmentKey);
  }
}
