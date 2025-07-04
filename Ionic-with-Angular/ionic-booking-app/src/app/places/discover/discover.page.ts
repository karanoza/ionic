import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { IonicModule, SegmentChangeEventDetail } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Subscription } from 'rxjs';
import { MenuController } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
    ScrollingModule,
  ],
})
export class DiscoverPage implements OnInit, OnDestroy {
  loadedPlaces!: Place[];
  listedLoadedPlaces!: Place[];
  relevantPlaces!: Place[];
  private placesSub!: Subscription;

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController,
    private cdRef: ChangeDetectorRef,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getPlaces();
  }

  ionViewWillEnter() {
    this.getPlaces();
  }

  //   trackByPlaceId(index: number, place: Place): string {
  //   return place.id ?? index.toString();
  // }

  getPlaces() {
    this.placesSub = this.placesService.places.subscribe((places) => {
      this.loadedPlaces = places;
      this.relevantPlaces = this.loadedPlaces;
      this.listedLoadedPlaces = this.relevantPlaces.slice(1);
    }); // however you're loading fresh data everytime
  }

  onOpenMenu() {
    this.menuCtrl.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event);
    if (event.detail.value === 'all') {
      this.relevantPlaces = this.loadedPlaces;
      this.listedLoadedPlaces = this.relevantPlaces.slice(1);
    } else {
      this.relevantPlaces = this.loadedPlaces.filter(
        (place) => place.userId !== this.authService.userId
      );
    }
    this.listedLoadedPlaces = this.relevantPlaces.slice(1);
  }

  ngOnDestroy(): void {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }
}
