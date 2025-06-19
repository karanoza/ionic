import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonSelect, ModalController } from '@ionic/angular/standalone';
import { Place } from 'src/app/places/place.model';
@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ReactiveFormsModule],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace!: Place;
  @Input() selectedMode!: 'select' | 'random';
  startDate!: string;
  endDate!: string;

  constructor(private modaCtrl: ModalController) {}

  ngOnInit() {
    //const dateFrom = new Date(this.selectedPlace.dateFrom!); Use only if you're 100% sure it's never undefined
    const dateFrom = new Date(this.selectedPlace.dateFrom ?? '');
    const dateTo = new Date(this.selectedPlace.dateTo ?? '');
    if (this.selectedMode === 'random') {
      // generates a random date between dateFrom and 7 days before dateTo,
      // then converts it to ISO string. In the end is the compact version
      this.startDate = new Date(
        dateFrom.getTime() +
          Math.random() *
            (dateTo.getTime() - 7 * 24 * 60 * 60 * 1000 - dateFrom.getTime())
      ).toISOString();

      this.endDate = new Date(
        new Date(this.startDate).getTime() +
          Math.random() *
            (new Date(this.startDate).getTime() +
              6 * 24 * 60 * 60 * 1000 -
              new Date(this.startDate).getTime())
      ).toISOString();
    }
  }

  onBookPlace() {
    this.modaCtrl.dismiss({ message: 'This is a dummy message' }, 'confirm');
  }

  onCancel() {
    this.modaCtrl.dismiss(null, 'cancel');
  }
}

// const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
// const rangeStart = dateFrom.getTime();
// const rangeEnd = dateTo.getTime() - oneWeekMs;

// const randomTime = rangeStart + Math.random() * (rangeEnd - rangeStart);
// this.startDate = new Date(randomTime).toISOString();
