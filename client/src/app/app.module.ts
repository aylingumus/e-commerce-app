import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerInfosComponent } from './components/customer-infos/customer-infos.component';
import { SubscriptionOrdersComponent } from './components/subscription-orders/subscription-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerInfosComponent,
    SubscriptionOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
