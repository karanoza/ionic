import { Component, OnInit } from '@angular/core';
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
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonInput,
  IonItem,
  IonTextarea,
  IonDatetime,
  IonButton,
  IonIcon,
  LoadingController,
} from '@ionic/angular/standalone';
import { PlacesService } from '../../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
  standalone: true,
  imports: [
    IonBackButton,
    IonGrid,
    IonRow,
    IonItem,
    IonTextarea,
    IonButton,
    IonIcon,
    IonDatetime,
    IonCol,
    IonLabel,
    IonInput,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class NewOfferPage implements OnInit {
  form!: FormGroup;

  constructor(
    private placesService: PlacesService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      description: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)],
      }),
      price: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)],
      }),
      dateFrom: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      dateTo: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    });
  }

  onCreateOffer() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl
      .create({
        message: 'Creating Place',
      })
      .then((loadingEl) => {
        loadingEl.present();

        this.placesService
          .addPlace(
            this.form.value.title,
            this.form.value.description,
            this.form.value.price,
            new Date(this.form.value.dateFrom),
            new Date(this.form.value.dateTo)
          )
          .subscribe(() => {
            loadingEl.dismiss()
            this.form.reset();
            this.router.navigate(['places/tabs/offers']);
          });
      });
    console.log(this.form);
  }
}
