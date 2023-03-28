import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMobileComponent } from './components/home-mobile/home-mobile.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeMobileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
