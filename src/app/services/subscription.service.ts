import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../shared/models/Order';
import { Subscription } from '../shared/models/Subscription';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private apiUrl = 'http://fe0ea33b4402.ngrok.io/api';

  constructor(private http: HttpClient) {}

  getCustomerInfo(phonenumber: string): Observable<Subscription[]> {
    const url = `${this.apiUrl}/getCustomerInfo/${phonenumber}`;
    console.log(url);
    return this.http.get<Subscription[]>(url);
  }

  getSubscriptionOrders(subscriptionId: string): Observable<Order[]> {
    const url = `${this.apiUrl}/getSubscriptionOrders/${subscriptionId}`;
    console.log(url);
    return this.http.get<Order[]>(url);
  }
}
