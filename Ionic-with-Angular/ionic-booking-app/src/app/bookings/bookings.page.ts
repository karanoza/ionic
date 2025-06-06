import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonButtons, IonHeader, IonMenu,IonTitle, IonToolbar, IonMenuButton } from '@ionic/angular/standalone';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
  standalone: true,
  imports: [IonContent,IonButtons,IonMenuButton ,IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BookingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
