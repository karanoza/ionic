import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonGrid, IonRow, IonCol, IonLabel, IonInput, IonItem, IonTextarea, IonDatetime, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
  standalone: true,
  imports: [IonBackButton,IonGrid,IonRow,IonItem,IonTextarea,IonButton,IonIcon,IonDatetime,IonCol,IonLabel,IonInput,IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, ReactiveFormsModule]
})
export class NewOfferPage implements OnInit {
  form!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }), 
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      dateFrom: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dateTo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    })
  }

  onCreateOffer(){
    console.log(this.form);
    
  }

}
