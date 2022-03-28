import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Chicken & Veggie Stir-Frye", "Getting take-out is a crave-worthy indulgence.", "https://img.buzzfeed.com/buzzfeed-static/static/2022-03/5/0/asset/377c068cc838/sub-buzz-1044-1646440773-10.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto"),
    new Recipe("French Bread Pizzas", "Pizza night is the best night.", "https://img.buzzfeed.com/buzzfeed-static/static/2020-06/11/14/asset/dcb5220da65d/sub-buzz-86-1591886919-8.jpg?downsize=1300:*&output-format=auto&output-quality=auto"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }


}
