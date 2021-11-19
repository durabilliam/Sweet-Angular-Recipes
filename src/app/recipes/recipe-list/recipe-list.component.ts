import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe Name', 'A Test Description', 'https://images.freeimages.com/images/large-previews/1e4/pasta-ingredients-1322353.jpg'),
    new Recipe('A Test Recipe Name', 'A Test Description', 'https://images.freeimages.com/images/large-previews/1e4/pasta-ingredients-1322353.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
