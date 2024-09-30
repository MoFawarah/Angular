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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesComponent,
    SubServicesComponent,
    Lecture3Component,
    SubscriptionComponent,
    SingleSubServiceComponent
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
      { path: "SingleSubService/:id", component: SingleSubServiceComponent},

      //{ path: "product", component: ProductsComponent },
  

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
