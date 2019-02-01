import { Component, OnInit, Input  } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input()  counter: number;
 
  @Input() orderData:any;
  increment(){
    this.counter += 1;
   // console.log(this.orderData)
    this.rest.updateorder(this.orderData.id, this.orderData.quantity).subscribe((result) => {
    }, (err) => {
      console.log(err);
    });
  }
  
  decrement(){
    if(this.counter != 0)
    this.counter -= 1;
    this.rest.deleteOrder(this.orderData.id).subscribe((result) => {
    }, (err) => {
      console.log(err);
    });
  }
  constructor(public rest:RestService) { }

  ngOnInit() {
  }

 
}
