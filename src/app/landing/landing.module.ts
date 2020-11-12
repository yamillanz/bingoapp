import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    //CommonModule,
    SharedModule,
    LandingRoutingModule,
    
  ]
})
export class LandingModule { }
