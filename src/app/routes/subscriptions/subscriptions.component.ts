import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from '../../shared/models/Subscription';
import { Router } from '@angular/router';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss'],
})
export class SubscriptionsComponent implements OnInit {
  subscriptions: Subscription[];
  errorMessage: string;
  noOrderSubs: string[] = [];

  constructor(
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    if (!history.state.subscriptions) {
      this.router.navigateByUrl('/');
    }
    console.log(history.state.subscriptions);
    this.subscriptions = history.state.subscriptions;
  }

  onGetSubscriptionOrders(subscription: Subscription): void {
    this.subscriptionService
      .getSubscriptionOrders(subscription.subscriptionId)
      .subscribe(
        (o) => {
          this.router.navigateByUrl('/orders', {
            state: { orders: o, subscription },
          });
        },
        (e) => {
          console.log(e.error);
          this.noOrderSubs = [...this.noOrderSubs, subscription.subscriptionId];
          this.errorMessage = e.error.message;
        }
      );
  }

  hasNoOrder(subscriptionId: string): boolean {
    if (this.noOrderSubs && this.noOrderSubs.indexOf(subscriptionId) !== -1)
      return false;
    return true;
  }
}
