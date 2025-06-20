import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonList, IonItem, IonImg, IonLabel } from '@ionic/angular/standalone';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { IonicModule, IonItemSliding } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { OfferItemComponent } from "./offer-item/offer-item.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule, OfferItemComponent]
})
export class OffersPage implements OnInit, OnDestroy {
  offers!: Place[];
  private placesSub!: Subscription;

  constructor(private placesService: PlacesService, private router: Router) { }
 

  ngOnInit() {
    // this.offers = this.placesService.places;
  }
  ionViewWillEnter() {
    this.placesSub = this.placesService.places.subscribe(places => {
      this.offers = places;
    }); // however you're loading fresh data everytime
}

  onEdit(offerId: string | undefined, slidingItem:IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers','edit', offerId])
  }

   ngOnDestroy(): void {
    if(this.placesSub){
         this.placesSub.unsubscribe();
    }
   
  }
}
