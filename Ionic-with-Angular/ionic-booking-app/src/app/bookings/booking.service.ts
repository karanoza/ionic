import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'b101',
      userId: 'u101',
      placeId: 'p1',
      placeTitle: 'Pune',
      guestNumber: '3',
    },
    {
      id: 'b102',
      userId: 'u102',
      placeId: 'p2',
      placeTitle: 'Kashmir',
      guestNumber: '2',
    },
    {
      id: 'b103',
      userId: 'u103',
      placeId: 'p3',
      placeTitle: 'Manali',
      guestNumber: '4',
    },
    {
      id: 'b104',
      userId: 'u104',
      placeId: 'p4',
      placeTitle: 'Munnar',
      guestNumber: '5',
    },
    {
      id: 'b105',
      userId: 'u105',
      placeId: 'p5',
      placeTitle: 'Leh-Ladakh',
      guestNumber: '2',
    },
    {
      id: 'b106',
      userId: 'u106',
      placeId: 'p6',
      placeTitle: 'Delhi',
      guestNumber: '3',
    },
    {
      id: 'b107',
      userId: 'u107',
      placeId: 'p7',
      placeTitle: 'Jaipur',
      guestNumber: '1',
    },
    {
      id: 'b108',
      userId: 'u108',
      placeId: 'p8',
      placeTitle: 'Amritsar',
      guestNumber: '4',
    },
    {
      id: 'b109',
      userId: 'u109',
      placeId: 'p9',
      placeTitle: 'Varanasi',
      guestNumber: '6',
    },
    {
      id: 'b110',
      userId: 'u110',
      placeId: 'p10',
      placeTitle: 'Goa',
      guestNumber: '2',
    },
  ];

  get bookings(){
    return [...this._bookings]
  }
}
