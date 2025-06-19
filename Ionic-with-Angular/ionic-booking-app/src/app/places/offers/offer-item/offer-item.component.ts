import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
   standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule]
})
export class OfferItemComponent  implements OnInit {
@Input() offer!: Place;
  constructor() { }

  ngOnInit() {}

  getDummyDate(){
    return new Date();
  }

}
