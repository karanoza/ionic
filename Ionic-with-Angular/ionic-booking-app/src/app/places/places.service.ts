import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, delay, map, Observable, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  constructor(private authService: AuthService) {}

  private _places = new BehaviorSubject<Place[]>([
    new Place(
      '1',
      'Pune',
      'Best places to visit near Pune',
      'https://i0.wp.com/triptometer.com/wp-content/uploads/2024/07/kalu-Waterfall-in-Monsoon.png?resize=1115%2C628&ssl=1',
      2999,
      new Date('2025-01-01'),
      new Date('2025-06-12'),
      'bunty'
    ),
    new Place(
      '2',
      'Kashmir',
      'Srinagar, Gulmarg and More',
      'https://hblimg.mmtcdn.com/content/hubble/img/destimgjune2022/mmt/activities/m_Srinagar%204_l_679_1437.jpg',
      45499,
      new Date('2025-01-01'),
      new Date('2025-06-12'),
      'bunty'
    ),

    new Place(
      '3',
      'Manali',
      'Best places to visit Manali',
      'https://hblimg.mmtcdn.com/content/hubble/img/manali/mmt/destination/m_Manali_activity_adventure_l_499_768.jpg',
      10599,
      new Date('2025-01-01'),
      new Date('2025-06-12'),
      'bunty'
    ),

    new Place(
      '4',
      'Munnar',
      'Explore the best of Kerala near Munnar',
      'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1369/Munnar%209.jpg?crop=800:420&downsize=800:420',
      15999,
      new Date('2025-01-01'),
      new Date('2025-06-12'),
      'bunty'
    ),

    new Place(
      '5',
      'Leh-Ladakh',
      'Best places to visit Leh-Ladakh',
      'https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Leh_tv_destination_img_4_l_667_1000.jpg',
      10999,
      new Date('2025-01-01'),
      new Date('2025-06-12'),
      'bunty'
    ),

    new Place(
      '6',
      'Delhi',
      'Red fort, India gate & many more',
      'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1218/Birds%20flying%20over%20India%20Gate.jpeg?crop=830:771px&downsize=830:771px',
      12999,
      new Date('2025-01-01'),
      new Date('2025-06-12'),
      'bunty'
    ),

    new Place(
      '7',
      'Jaipur',
      'Best places to visit Jaipur.',
      'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3769/hawa-mahal.jpg?crop=800:420&downsize=800:420',
      15499,
      new Date('2025-01-01'),
      new Date('2025-06-12'),
      'bunty'
    ),

    new Place(
      '8',
      'Amritsar',
      'Visit Golden Temple and Many More',
      'https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Amritsar_main_tv_destination_img_4_l_1028_1547.jpg',
      12199,
      new Date('2025-01-01'),
      new Date('2025-06-12'),
      'karan'
    ),

    new Place(
      '9',
      'Varanasi',
      'Visit Varanasi and Ganga Aarti',
      'https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/sightseeing/VNS/498.png?crop=830:771px&downsize=830:771px',
      12999,
      new Date('2025-01-01'),
      new Date('2025-06-12'),
      'karan'
    ),

    new Place(
      '10',
      'Goa',
      'Best places to visit Goa',
      'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/U.jpg?crop=830:771px&downsize=830:771px',
      20999,
      new Date('2025-01-01'),
      new Date('2025-06-12'),
      'karan'
    ),
  ]);

  get places() {
    return this._places.asObservable();
  }

  getPlace(id: string | null) {
    return this.places.pipe(
      take(1),
      map((places) => {
        const place = places.find((p) => p.id === id);
        return place ? { ...place } : null;
      })
    );
  }

  // addPlaces(
  //   title: string,
  //   description: string,
  //   price: number,
  //   dateFrom: Date,
  //   dateTo: Date
  // ) {
  //   const newPlace = new Place(
  //     Math.random().toString(),
  //     title,
  //     description,
  //     'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/U.jpg?crop=830:771px&downsize=830:771px',
  //     price,
  //     dateFrom,
  //     dateTo,
  //     this.authService.userId
  //   );
  //   this.places
  //     .pipe(
  //       take(1),
  //       tap((places) => {
  //         setTimeout(() => {
  //           this._places.next(places.concat(newPlace));
  //         }, 1000);
  //       })
  //     )
  //     .subscribe((places) => {});

  //   console.log(this._places.getValue(), 'this are the new places updated');
  // }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ): Observable<Place[]> {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/U.jpg',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );

    return this.places.pipe(
      take(1),
      delay(1000),
      tap((places) => {
        this._places.next(places.concat(newPlace));
      })
    );
  }

  updatePlace(placeId: string, title: string, description: string) {
    return this.places.pipe(
      take(1),
      delay(1000),
      tap((places) => {
        const updatedPlaceIndex = places.findIndex((pl) => pl.id === placeId);
        const updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        updatedPlaces[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.dateFrom,
          oldPlace.dateTo,
          oldPlace.userId
        );
        this._places.next(updatedPlaces);
      })
    );
  }
}
