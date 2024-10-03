import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { SubServicesComponent } from './sub-service/sub-service.component';
import { Lecture3Component } from './lecture3/lecture3.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SingleSubServiceComponent } from './single-sub-service/single-sub-service.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddServiceComponent } from './Admin/add-service/add-service.component';
import { ShowServicesComponent } from './Admin/show-services/show-services.component';
import { EditServiceComponent } from './Admin/edit-service/edit-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesComponent,
    SubServicesComponent,
    Lecture3Component,
    SubscriptionComponent,
    SingleSubServiceComponent,
    RegistrationUserComponent,
    LoginUserComponent,
    DashboardComponent,
    AddServiceComponent,
    ShowServicesComponent,
    EditServiceComponent
  ],
  imports: [
    FormsModule,
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: ServicesComponent, pathMatch: "full" },
      { path: "SubService/:id", component: SubServicesComponent },
      { path: "lecture3", component: Lecture3Component },
      { path: "subscription", component: SubscriptionComponent },
      { path: "SingleSubService/:id", component: SingleSubServiceComponent },
      { path: "Registration", component: RegistrationUserComponent },
      { path: "Login", component: LoginUserComponent },
      {
        path: "Dashboard", component: DashboardComponent, children: [

          { path: "AddService", component: AddServiceComponent },
          { path: "ShowServices", component: ShowServicesComponent },
          { path: "EditServices/:id", component: EditServiceComponent }

      ] },


      //{ path: "product", component: ProductsComponent },
  

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
