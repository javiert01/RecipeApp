import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  
  @ViewChild('nameInput') ingredientNameInput:ElementRef;
  @ViewChild('amountInput') ingredientAmountInput:ElementRef;


  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(){
    const ing = new Ingredient(this.ingredientNameInput.nativeElement.value,this.ingredientAmountInput.nativeElement.value);
    this.slService.addIngredient(ing);
  }


}
