import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input()  counter: number;
  increment(){
    this.counter += 1;
  }
  
  decrement(){
    if(this.counter != 0)
    this.counter -= 1;
  }
  constructor() { }

  ngOnInit() {
  
    
    
  }

}
