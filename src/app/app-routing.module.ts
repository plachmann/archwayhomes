import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FloorplansComponent } from './components/floorplans/floorplans.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'floorplans', component: FloorplansComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
