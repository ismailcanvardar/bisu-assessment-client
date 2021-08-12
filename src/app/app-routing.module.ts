import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubscriptionsComponent } from './routes/subscriptions/subscriptions.component';
import { OrdersComponent } from './routes/orders/orders.component';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
