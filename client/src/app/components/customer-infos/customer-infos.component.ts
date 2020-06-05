import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-customer-infos',
  templateUrl: './customer-infos.component.html',
  styleUrls: ['./customer-infos.component.scss']
})
export class CustomerInfosComponent implements OnInit {

  customerInfos: any;
  phoneNumber = '';

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
  }

  searchCustomerInfos() {
    this.subscriptionService.findCustomerInfoByPhoneNumber(this.phoneNumber)
      .subscribe(
        data => {
          this.customerInfos = data;
          console.log(data);
        },
        error => {
          this.customerInfos = [];
          console.log(error);
        });
  }

}
