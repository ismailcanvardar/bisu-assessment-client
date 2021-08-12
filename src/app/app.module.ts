import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionsComponent } from './routes/subscriptions/subscriptions.component';
import { OrdersComponent } from './routes/orders/orders.component';
import { HomeComponent } from './routes/home/home.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionsComponent,
    OrdersComponent,
    HomeComponent,
    SearchbarComponent,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
