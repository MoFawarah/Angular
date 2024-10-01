import { Component } from '@angular/core';
import { UrlService } from '../URL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-user',
  templateUrl: './registration-user.component.html',
  styleUrl: './registration-user.component.css'
})
export class RegistrationUserComponent {

  ngOnInit() {

  }

  constructor(private _ser: UrlService, private _router: Router) {

  }
  
  addnewUser(data: any) {

    //data will be in the form of key : value

    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.addUser(form).subscribe(() => {
      alert("User Added")
      this._router.navigate(['/Login'])

    },
      (error) => {
        alert("Fill the inputs bro")
      }

    )
  }

}
