import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonImg, IonLabel } from '@ionic/angular/standalone';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [IonLabel, IonImg, IonAvatar, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'R1',
      title: 'Aamras',
      imageUrl:'https://rakskitchen.net/wp-content/uploads/2016/05/aamras-recipe.jpg',
      ingredients:['Mangoes', 'Sugar', 'Milk']
    },
    {
      id: 'R2',
      title: 'Maggie',
      imageUrl:'https://www.maggi.ph/sites/default/files/styles/home_stage_1500_700/public/srh_recipes/ec9fce823d23bbb054d52aea1981fc0c.jpg?h=28121b77&itok=8wByr5Il',
      ingredients:['Maggie', 'Oil', 'Masala']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
