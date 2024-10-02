import { Component } from '@angular/core';
import { UrlService } from '../URL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {


  ngOnInit() {

  }

  constructor(private _ser: UrlService, private _router: Router) {

  }

  loginFunction(data: any) {
    // data will be in the form of key : value

    const form = new FormData();
    for (let key in data) {
      form.append(key, data[key]);
    }

    this._ser.loginUser(form).subscribe(
      () => {
        debugger
        // Check if the email includes "@admin.com"
        if (data.Email.includes("@admin.com")) {
          this._router.navigate(['/Dashboard']);
        } else {
          this._router.navigate(['']);
        }
      },
      (error) => {
        alert("User doesn't exist");
      }
    );

  }

}
