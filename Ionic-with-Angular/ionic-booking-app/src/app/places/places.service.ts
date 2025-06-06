import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[]  = [
     {
    id: '1',
    title: 'Wireless Bluetooth Headphones',
    descriptio: 'High-quality sound with noise cancellation.',
    imageUrl: 'https://www.leafstudios.in/cdn/shop/files/Mainupdated_35a234be-57a2-41b6-b8db-79b54b7f5a7f_900x.jpg?v=1690372991',
    price: '₹2,999'
  },
  {
    id: '2',
    title: 'Smart Fitness Watch',
    descriptio: 'Track your health and fitness in style.',
    imageUrl: 'https://via.placeholder.com/150?text=Watch',
    price: '₹4,499'
  },
  {
    id: '3',
    title: 'Eco-friendly Water Bottle',
    descriptio: 'Reusable and BPA-free bottle for daily hydration.',
    imageUrl: 'https://via.placeholder.com/150?text=Bottle',
    price: '₹599'
  },
  {
    id: '4',
    title: 'Portable USB Fan',
    descriptio: 'Mini fan perfect for summer travel or office use.',
    imageUrl: 'https://via.placeholder.com/150?text=Fan',
    price: '₹299'
  },
  {
    id: '5',
    title: 'Laptop Stand',
    descriptio: 'Ergonomic design for better posture and cooling.',
    imageUrl: 'https://via.placeholder.com/150?text=Stand',
    price: '₹1,199'
  },
  {
    id: '6',
    title: 'LED Desk Lamp',
    descriptio: 'Adjustable lighting with touch controls.',
    imageUrl: 'https://via.placeholder.com/150?text=Lamp',
    price: '₹899'
  },
  {
    id: '7',
    title: 'Noise Cancelling Earbuds',
    descriptio: 'Compact earbuds with deep bass and clear audio.',
    imageUrl: 'https://via.placeholder.com/150?text=Earbuds',
    price: '₹1,499'
  },
  {
    id: '8',
    title: 'Gaming Mouse',
    descriptio: 'High precision mouse with RGB lighting.',
    imageUrl: 'https://via.placeholder.com/150?text=Mouse',
    price: '₹1,099'
  },
  {
    id: '9',
    title: 'Notebook & Pen Set',
    descriptio: 'Premium paper notebook with a smooth pen.',
    imageUrl: 'https://via.placeholder.com/150?text=Notebook',
    price: '₹349'
  },
  {
    id: '10',
    title: 'Smart Plug',
    descriptio: 'Control your appliances remotely via app.',
    imageUrl: 'https://via.placeholder.com/150?text=Plug',
    price: '₹799'
  }
];

  get places() {
    return [...this._places]
  }

  constructor() { }
}
