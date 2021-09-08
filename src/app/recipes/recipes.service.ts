import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [{
    id: 'r1',
    title: 'Pastas',
    imageURL: 'https://media.istockphoto.com/photos/pasta-plate-picture-id632439546?s=612x612',
    ingredients: ['French Fries', 'Meat', 'Tomatoes']
  },
  {
    id: 'r2',
    title: 'Sphagiti',
    imageURL: 'https://media.istockphoto.com/photos/pasta-plate-picture-id632439546?s=612x612',
    ingredients: ['Sphagetti', 'Meat', 'Tomatoes']
  }];

  constructor() { }

  // get all recipes
  getAllRecipes(){
    return [...this.recipes];
  }

  //get single recipe
  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => recipe.id === recipeId)
    };
  }
}
