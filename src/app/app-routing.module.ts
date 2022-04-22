import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResourcesComponent} from './resources/resources.component'

const routes: Routes = [
  {path: 'resources', component: ResourcesComponent},
  { path: '', redirectTo: '/resources', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
