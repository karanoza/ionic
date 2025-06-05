import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonItem, IonLabel, IonImg } from '@ionic/angular/standalone';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.page.html',
  styleUrls: ['./recipe-item.page.scss'],
  standalone: true,
  imports: [IonImg, IonLabel, IonItem, IonAvatar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class RecipeItemPage implements OnInit {
@Input() recipeItem!: Recipe
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
