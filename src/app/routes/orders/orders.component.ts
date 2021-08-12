import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from '../../shared/models/Subscription';
import { Order } from '../../shared/models/Order';
import * as moment from 'moment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  subscription: Subscription;
  orders: Order[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!history.state.orders) {
      this.router.navigateByUrl('/');
    }
    console.log(history.state);
    const newTest = JSON.parse(history.state.orders[0].products);
    console.log(newTest);
    this.orders = history.state.orders;
    this.subscription = history.state.subscription;
  }

  parseJson(val: string): any {
    console.log(JSON.parse(val));
    return JSON.parse(val);
  }

  formatDate(val: string): string {
    let date = moment(val).format('YYYY-MM-DD hh:mm:ss');

    return date;
  }
}
