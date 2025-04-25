import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'R1',
      title: 'Aamras',
      imageUrl:
        'https://rakskitchen.net/wp-content/uploads/2016/05/aamras-recipe.jpg',
      ingredients: ['Mangoes', 'Sugar', 'Milk'],
    },
    {
      id: 'R2',
      title: 'Maggie',
      imageUrl:
        'https://www.maggi.ph/sites/default/files/styles/home_stage_1500_700/public/srh_recipes/ec9fce823d23bbb054d52aea1981fc0c.jpg?h=28121b77&itok=8wByr5Il',
      ingredients: ['Maggie', 'Oil', 'Masala'],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }
}
