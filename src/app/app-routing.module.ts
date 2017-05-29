import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FloorplansComponent } from './components/floorplans/floorplans.component';
import { ContactComponent } from './components/contact/contact.component';
import { AidenComponent } from './components/floorplans/aiden/aiden.component';
import { CandaceComponent } from './components/floorplans/candace/candace.component';
import { ChelseaComponent } from './components/floorplans/chelsea/chelsea.component';
import { ElizabethComponent } from './components/floorplans/elizabeth/elizabeth.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'floorplans', component: FloorplansComponent },
  { path: 'floorplans/aiden', component: AidenComponent },
  { path: 'floorplans/candace', component: CandaceComponent },
  { path: 'floorplans/chelsea', component: ChelseaComponent },
  { path: 'floorplans/elizabeth', component: ElizabethComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
