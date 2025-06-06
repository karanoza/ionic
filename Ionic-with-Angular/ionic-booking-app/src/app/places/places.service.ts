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
    descriptio: 'Best places to visit in Pune',
    imageUrl: 'https://vl-prod-static.b-cdn.net/system/images/000/705/502/6ff12f748b7646cac6c0e305b2d1bf55/x1000gt/WhatsApp_Image_2023-08-27_at_11_47_06_PM__2_.jpeg?1693201396',
    price: 'Starts from ₹2,999'
  },
  {
    id: '2',
    title: 'Kashmir',
    descriptio: 'Best places to visit Kashmir',
    imageUrl: 'https://hblimg.mmtcdn.com/content/hubble/img/destimgjune2022/mmt/activities/m_Srinagar%204_l_679_1437.jpg',
    price: 'Starts from ₹45,499'
  },
  {
    id: '3',
    title: 'Manali',
    descriptio: 'Best places to visit Manali',
    imageUrl: 'https://hblimg.mmtcdn.com/content/hubble/img/manali/mmt/destination/m_Manali_activity_adventure_l_499_768.jpg',
    price: 'Starts from ₹10,599'
  },
  {
    id: '4',
    title: 'Munnar',
    descriptio: 'Best places to visit Munnar',
    imageUrl: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1369/Munnar%209.jpg?crop=800:420&downsize=800:420',
    price: 'Starts from ₹15,999'
  },
  {
    id: '5',
    title: 'Leh-Ladakh',
    descriptio: 'Best places to visit Leh-Ladakh',
    imageUrl: 'https://hblimg.mmtcdn.com/content/hubble/img/tvdestinationimages/mmt/activities/m_Leh_tv_destination_img_4_l_667_1000.jpg',
    price: 'Starts from ₹10,999'
  },
  {
    id: '6',
    title: 'Delhi',
    descriptio: 'Best places to visit Delhi',
    imageUrl: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1218/Birds%20flying%20over%20India%20Gate.jpeg?crop=830:771px&downsize=830:771px',
    price: 'Starts from ₹12,999'
  },
  {
    id: '7',
    title: 'Jaipur',
    descriptio: 'Best places to visit Jaipur.',
    imageUrl: 'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3769/hawa-mahal.jpg?crop=800:420&downsize=800:420',
    price: 'Starts from ₹15,499'
  },
  {
    id: '8',
    title: 'Amritsar',
    descriptio: 'Best places to visit Leh-Ladakh',
    imageUrl: 'https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/destination/m_Amritsar_main_tv_destination_img_4_l_1028_1547.jpg',
    price: 'Starts from ₹12,199'
  },
  {
    id: '9',
    title: 'Varanasi',
    descriptio: 'Visit Varanasi and Ganga Aarti',
    imageUrl: 'https://via.placeholder.com/150?text=Notebook',
    price: 'Starts from ₹12,999'
  },
  {
    id: '10',
    title: 'Goa',
    descriptio: 'Best places to visit Goa',
    imageUrl: 'https://via.placeholder.com/150?text=Plug',
    price: 'Starts from ₹20,999'
  }
];

  get places() {
    return [...this._places]
  }

  constructor() { }
}
