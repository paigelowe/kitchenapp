import { Component } from '@angular/core';
import { FoodDataService } from './food-data.service';
import { FoodItem } from './food-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FoodDataService]
})
export class AppComponent {
  newFood: FoodItem = new FoodItem;

  constructor(private foodDataService: FoodDataService){

  }

  addFood(){
    this.foodDataService.addFoodItem(this.newFood);
    this.newFood = new FoodItem();
  }

  toggleFoodNeeded(food) {
    this.foodDataService.toggleFoodItemNeeded(food);
  }

  removeFood(food){
    this.foodDataService.deleteFoodItemById(food.id);
  }

  get foods(){
    return this.foodDataService.getAllFoodItems();
  } 
}
