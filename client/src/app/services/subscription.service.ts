import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(error.error.message);;
    return throwError(errorMessage);
  }

  findSubscriptionOrdersBySubscriptionId(subscriptionId) {
    return this.http.get(`${baseUrl}/getSubscriptionOrders/${subscriptionId}`)
    .pipe(catchError(this.handleError));
  }

  findCustomerInfoByPhoneNumber(phoneNumber) {
    return this.http.get(`${baseUrl}/getCustomerInfo/${phoneNumber}`)
    .pipe(catchError(this.handleError));
  }
}
