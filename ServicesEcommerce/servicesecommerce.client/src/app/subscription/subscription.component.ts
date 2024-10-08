import { Component } from '@angular/core';
import { UrlService } from '../URL/url.service';


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

  ngOnInit() {
   this.getsubSub()

  }
  constructor(private _ser: UrlService) { }

  arraySub: any

  getsubSub() {
    this._ser.getSubscriptions().subscribe((data) => {
      this.arraySub = data;
      console.log("scriptions", this.arraySub)
    })
  }

  data = {
    "userId": 2,
    "subscriptionId": 2,
    "subServiceId": 1
  }

  addUserSubscription(id: any) {
    this.data.subscriptionId = id;
    this._ser.addUserSubscription(this.data).subscribe(() => {
      alert("User Subscription Added")
    })
  }

}


