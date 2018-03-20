import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Grilled Chicken','A tasty grilled chicken with a delicious BBQ sauce','http://del.h-cdn.co/assets/17/34/980x490/landscape-1503418862-chicken-thighs-delish.jpg',[
            new Ingredient('Chicken',1),
            new Ingredient ('Tomato',2)
        ]),
        new Recipe('Smoked Salmon','A delicious smoked salmon, filled with healthy vegetables','https://static01.nyt.com/images/2016/02/16/dining/16COOKING-SALMONWITHLEEKS2/16COOKING-SALMONWITHLEEKS2-articleLarge.jpg',[
            new Ingredient('Salmon',1),
            new Ingredient('Lettuce',1)
        ])
      ];

      constructor(private slService:ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

}