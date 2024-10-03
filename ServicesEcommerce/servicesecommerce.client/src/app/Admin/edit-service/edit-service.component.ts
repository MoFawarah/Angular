import { Component } from '@angular/core';
import { UrlService } from '../../URL/url.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrl: './edit-service.component.css'
})
export class EditServiceComponent {
  imageFile: any
  changeImage(event: any) {

    this.imageFile = event.target.files[0]

  }

  ServiceId: any;
  ngOnInit() {
    this.ServiceId = this._route.snapshot.paramMap.get("id");
  }

  constructor(private _ser: UrlService, private _route: ActivatedRoute, private _router: Router) { }



  updateServiceAdmin(data: any) {
    debugger
    var formdata = new FormData();


    for (let item in data) {
      formdata.append(item, data[item])
    }

    formdata.append("ServiceImage", this.imageFile)

    this._ser.editService(this.ServiceId, formdata).subscribe((data) => {
      alert("Service Updated Successfully !")
      this._router.navigate(["/dashboard"])
    });
  }
}
