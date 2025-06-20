// discover.module.ts

import { ChangeDetectorRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';
import { PlacesRoutingModule } from './places-routing.module';


const routes: Routes = [
  {
    path: '',
    component: PlacesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesRoutingModule
  ]
})
export class PlacesPageModule {
 }
