import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; 
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: true,
  imports: [CommonModule,IonicModule,FormsModule, RouterModule,ScrollingModule]
})
export class DiscoverPage implements OnInit {
  loadedPlaces!: Place[];
  listedLoadedPlaces!: Place[];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
    this.listedLoadedPlaces = this.loadedPlaces.slice(1);
  }
}
