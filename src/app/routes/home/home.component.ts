import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isSearchButtonDisabled: boolean = false;
  errorMessage: string = '';
  constructor(
    private subscriptionService: SubscriptionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getCustomerInfo(phonenumber: string) {
    this.errorMessage = '';
    if (phonenumber) {
      this.isSearchButtonDisabled = true;
      this.subscriptionService.getCustomerInfo(phonenumber).subscribe(
        (s) => {
          // console.log(s);
          // const visibilityTimeout = setTimeout(
          //   () => (this.isSearchButtonDisabled = false),
          //   500
          // );
          // return () => clearTimeout(visibilityTimeout);
          this.isSearchButtonDisabled = false;
          this.router.navigateByUrl('/subscriptions', {
            state: { subscriptions: s },
          });
        },
        (e) => {
          console.log(e.error.message);
          this.errorMessage = e.error.message;
          this.isSearchButtonDisabled = false;
        }
      );
    }
  }
}
