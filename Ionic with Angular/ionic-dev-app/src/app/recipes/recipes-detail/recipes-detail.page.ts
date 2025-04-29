import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonGrid, IonRow, IonCol, IonList, IonItem, IonButtons, IonBackButton, IonAlert, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonAlert, IonBackButton, IonButtons, IonItem, IonList, IonCol, IonRow, IonGrid, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RecipesDetailPage implements OnInit {
  loadedRecipe!: Recipe;

  constructor(private activatedRoute: ActivatedRoute,private router: Router, private recipesService: RecipesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')){
        //redirect
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId)

  });
  }

  onDeleteRecipe(){
    this.recipesService.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes'])
  }

}
