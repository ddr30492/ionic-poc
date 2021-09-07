import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [{
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

  ngOnInit() {
  }

}
