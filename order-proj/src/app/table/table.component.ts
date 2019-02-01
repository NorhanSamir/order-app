import { Component, OnInit } from '@angular/core';
import {CounterComponent} from '../counter/counter.component'
import { RestService } from '../rest.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  orders:any = [];
resturantName:string;
userName:string;
  constructor(public rest:RestService) { }

  ngOnInit() {
    this.getOrders();
  }
  getOrders() {
    this.orders=[]
    this.rest.getOrders().subscribe((data: {}) => {
      //console.log(data);
      this.orders = data;
      this.resturantName=this.orders.restaurant.title;
      this.userName=this.orders.user.name;


    });
   
  }
}
