import { Component, Input } from '@angular/core';

import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Samply Recipe',
      'This is sample a recipe.',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'
    ),
    new Recipe(
      'Samply Recipe2',
      'This is sample a recipe2.',
      'https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/1:1/w_1600,c_limit/0701-tj-recipe-potato-v2.jpg'
    ),
  ];
}
