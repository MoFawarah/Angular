import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { SubServicesComponent } from './sub-service/sub-service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ServicesComponent,
    SubServicesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: ServicesComponent, pathMatch: "full" },
      { path: "SubService/:id", component: SubServicesComponent},
      //{ path: "product", component: ProductsComponent },
  

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
