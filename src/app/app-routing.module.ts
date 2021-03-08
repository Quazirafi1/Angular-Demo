import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';

const routes: Routes = [
  {path:'doctor/:name', component: DoctorDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DoctorDetailsComponent
]
