import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, NavController } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: true,
  imports: [IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PlaceDetailPage implements OnInit {
  place!: Place

  constructor(private router: Router, private route: ActivatedRoute, private navCtrl:NavController, private placesService:PlacesService) { }

  ngOnInit() {
     this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'))
  })
  }

onBookPlace(){
  //this.router.navigateByUrl('/places/tabs/discover');
  this.navCtrl.navigateBack('/places/tabs/discover');
}
}
