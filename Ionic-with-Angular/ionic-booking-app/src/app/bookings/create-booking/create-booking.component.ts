import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular/standalone';
import { Place } from 'src/app/places/place.model';
@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
  standalone: true,
  imports: [
    IonicModule  
  ]
})
export class CreateBookingComponent  implements OnInit {
  @Input() selectedPlace!: Place;

  constructor(private modaCtrl:ModalController) { }

  ngOnInit() {}

  onBookPlace(){
    this.modaCtrl.dismiss({message: 'This is a dummy message'}, 'confirm')
  }

  onCancel(){
    this.modaCtrl.dismiss(null, 'cancel');
  }

}
