import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  NavController,
} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule],
})
export class EditOfferPage implements OnInit, OnDestroy {
  place: Place| null = null;
  form!: FormGroup;
  private placesSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) {}


  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('places/tabs/offers');
        return;
      }
      this.placesService
        .getPlace(paramMap.get('placeId'))
        .subscribe((place) => {
          this.place = place;
          this.form = new FormGroup({
            title: new FormControl(this.place?.title, {
              updateOn: 'blur',
              validators: [Validators.required],
            }),
            description: new FormControl(this.place?.description, {
              updateOn: 'blur',
              validators: [Validators.required, Validators.maxLength(180)],
            }),
          });
        });
    });
  }

  onUpdateOffer() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
  }


   ngOnDestroy(): void {
    if(this.placesSub){
         this.placesSub.unsubscribe();
    }
  }
}
