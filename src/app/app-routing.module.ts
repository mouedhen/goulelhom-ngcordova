import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ComplaintsComponent } from './complaints/complaints.component';

import { MunicipalitiesComponent } from './municipalities/municipalities.component';

import { PetitionsComponent } from './petitions/petitions.component';

import { EventsComponent } from './events/events.component';

import { EventComponent } from './event/event.component';

import { EmohComponent } from './emoh/emoh.component';

const routes: Routes = [
  {
    path: '',
    component: EmohComponent
  },
  {
    path: 'complaints',
    component: ComplaintsComponent
  },
  {
    path: 'petitions',
    component: PetitionsComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'events/:id',
    component: EventComponent
  },
  {
    path: 'municipalities',
    component: MunicipalitiesComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  EmohComponent,
  ComplaintsComponent,
  MunicipalitiesComponent,
  PetitionsComponent,
  EventsComponent,
  EventComponent,
];
