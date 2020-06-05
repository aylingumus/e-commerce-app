import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subscription-orders',
  templateUrl: './subscription-orders.component.html',
  styleUrls: ['./subscription-orders.component.scss']
})
export class SubscriptionOrdersComponent implements OnInit {

  subscriptions: any;
  subscriptionId = '';

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
  }

  searchSubscriptionOrders() {
    this.subscriptionService.findSubscriptionOrdersBySubscriptionId(this.subscriptionId)
    .subscribe(
      data => {
        this.subscriptions = data;
        console.log(data);
      },
      error => {
        this.subscriptions = [];
        console.log(error);
      });
  }

}
