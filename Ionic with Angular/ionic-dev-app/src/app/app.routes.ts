import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo:'recipes', pathMatch: 'full'
  },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadComponent: () => import('./recipes/recipes.page').then( m => m.RecipesPage),
      },
      {
        path: ':recipeId',
        loadComponent: () => import('./recipes/recipes-detail/recipes-detail.page').then( m => m.RecipesDetailPage)
      }
    ]
  },
  {
    path: 'recipe-item',
    loadComponent: () => import('./recipes/recipe-item/recipe-item.page').then( m => m.RecipeItemPage)
  },
 
];
