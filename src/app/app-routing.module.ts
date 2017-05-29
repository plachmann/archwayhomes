import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FloorplansComponent } from './components/floorplans/floorplans.component';
import { ContactComponent } from './components/contact/contact.component';
import { AidenComponent } from './components/floorplans/aiden/aiden.component';
import { CandaceComponent } from './components/floorplans/candace/candace.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'floorplans', component: FloorplansComponent },
  { path: 'floorplans/aiden', component: AidenComponent },
  { path: 'floorplans/candace', component: CandaceComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
