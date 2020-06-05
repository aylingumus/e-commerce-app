import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionOrdersComponent } from './components/subscription-orders/subscription-orders.component';
import { CustomerInfosComponent } from './components/customer-infos/customer-infos.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'getSubscriptionOrders', component: SubscriptionOrdersComponent },
  { path: 'getCustomerInfos', component: CustomerInfosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
