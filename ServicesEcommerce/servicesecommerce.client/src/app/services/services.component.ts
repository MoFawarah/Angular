import { Component } from '@angular/core';
import { UrlService } from '../URL/url.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  ngOnInit() {
    this.getServices()
  }

  constructor(private _ser: UrlService) {

  }

  services: any
  getServices() {
    this._ser.getServices().subscribe((data) => {
      this.services = data;
      console.log("Services", this.services )
    })
  }


}
