import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { ToxicClassComponent } from './toxic-class.component';
import { ToxicClassRoutingModule } from './toxic-class-routing.module';

@NgModule({
  declarations: [
    ToxicClassComponent
  ],
  imports: [
    CommonModule,
    ToxicClassRoutingModule,
    ChartsModule
  ],
  exports: [
    ToxicClassComponent,
  ],
})
export class ToxicClassModule { }
