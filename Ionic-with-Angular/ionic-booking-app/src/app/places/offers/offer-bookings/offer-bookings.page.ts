import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonBackButton,
  NavController,
} from '@ionic/angular/standalone';
import { Place } from '../../place.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})
export class OfferBookingsPage implements OnInit, OnDestroy {
  place: Place | null = null;
  private placesSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    //   this.route.paramMap.subscribe(paramMap => {
    //     if(!paramMap.has('placeId')){
    //       this.navCtrl.navigateBack('places/tabs/offers');
    //       return;
    //     }
    //     this.placesSub = this.placesService.getPlace(paramMap.get('placeId')).subscribe(place => {
    //       this.place = place;
    //     })
    // })
  }

  ionViewWillEnter() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('places/tabs/offers');
        return;
      }
      this.placesSub = this.placesService
        .getPlace(paramMap.get('placeId'))
        .subscribe((place) => {
          this.place = place;
        });
    });
  }

  ngOnDestroy(): void {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }
}
