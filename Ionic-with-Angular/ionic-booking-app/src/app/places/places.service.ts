import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[]  = [
     {
    id: '1',
    title: 'Pune',
    description: 'Best places to visit near Pune',
    imageUrl: 'https://i0.wp.com/triptometer.com/wp-content/uploads/2024/07/kalu-Waterfall-in-Monsoon.png?resize=1115%2C628&ssl=1',
    price: 'Starts from ₹2,999'
  },
  {
    id: '2',
    title: 'Kashmir',
    description: 'Srinagar, Gulmarg and More',
    imageUrl: 'https://hblimg.mmtcdn.com/content/hubble/img/destimgjune2022/mmt/activities/m_Srinagar%204_l_679_1437.jpg',
    price: 'Starts from ₹45,499'
  },
  {
    id: '3',
    title: 'Manali',
    description: 'Best places to visit Manali',
    imageUrl: 'https://hblimg.mmtcdn.com/content/hubble/img/manali/mmt/destination/m_Manali_activity_adventure_l_499_768.jpg',
    price: 'Starts from ₹10,599'
  },
  {
    id: '4',
    title: 'Munnar',
    description: 'Explore the best of Kerala near Munnar',
    imageUrl: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1369/Munnar%209.jpg?crop=800:420&downsize=800:420',
    price: 'Starts from ₹15,999'
  },
  {
    id: '5',
    title: 'Leh-Ladakh',
    description: 'Best places to visit Leh-Ladakh',
    imageUrl: 'https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Leh_tv_destination_img_4_l_667_1000.jpg',
    price: 'Starts from ₹10,999'
  },
  {
    id: '6',
    title: 'Delhi',
    description: 'Red fort, India gate & many more',
    imageUrl: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1218/Birds%20flying%20over%20India%20Gate.jpeg?crop=830:771px&downsize=830:771px',
    price: 'Starts from ₹12,999'
  },
  {
    id: '7',
    title: 'Jaipur',
    description: 'Best places to visit Jaipur.',
    imageUrl: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3769/hawa-mahal.jpg?crop=800:420&downsize=800:420',
    price: 'Starts from ₹15,499'
  },
  {
    id: '8',
    title: 'Amritsar',
    description: 'Visit Golden Temple and Many More',
    imageUrl: 'https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Amritsar_main_tv_destination_img_4_l_1028_1547.jpg',
    price: 'Starts from ₹12,199'
  },
  {
    id: '9',
    title: 'Varanasi',
    description: 'Visit Varanasi and Ganga Aarti',
    imageUrl: 'https://hldak.mmtcdn.com/prod-s3-activity-templates/activitiesImagesFinal/sightseeing/VNS/498.png?crop=830:771px&downsize=830:771px',
    price: 'Starts from ₹12,999'
  },
  {
    id: '10',
    title: 'Goa',
    description: 'Best places to visit Goa',
    imageUrl: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1328/U.jpg?crop=830:771px&downsize=830:771px',
    price: 'Starts from ₹20,999'
  }
];

  get places(){
    return [...this._places];
  }

  getPlace(id: string | null) {
    return {...this._places.find(p => p.id === id)}
  }

  constructor() { }
}
