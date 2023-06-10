import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, query, stagger } from '@angular/animations';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-glowing-text',
  templateUrl: './glowing-text.component.html',
  styleUrls: ['./glowing-text.component.css'],
  animations: [
   
  ]
})
export class GlowingTextComponent implements OnInit {
  today: any;

  constructor() { 
    setInterval(() => {this.today = Date.now()}, 1); 
  }

  ngOnInit(): void {
    
  }
  
}
