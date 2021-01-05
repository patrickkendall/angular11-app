import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToxicClassComponent } from './toxic-class.component';

const routes: Routes = [
  { path: '', component: ToxicClassComponent, children: [] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToxicClassRoutingModule { }
