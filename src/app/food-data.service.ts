import { Injectable } from '@angular/core';
import  { FoodItem } from './food-item';

@Injectable()
export class FoodDataService {

  lastId: number = 0;

  foodItems: FoodItem[] = [];

  constructor() { }

  addFoodItem(foodItem: FoodItem): FoodDataService {
    if (!foodItem.id){
      foodItem.id = ++this.lastId;
    }
    this.foodItems.push(foodItem);
    return this;
  }

  deleteFoodItemById(id: number): FoodDataService {
    this.foodItems = this.foodItems.filter(food => food.id !== id);
    return this;
  }

  updateFoodItemById(id: number, values: Object = {}): FoodItem {
    let foodItem = this.getFoodItemById(id);
    if (!foodItem) {
      return null;
    }
    Object.assign(foodItem, values);
    return foodItem;
  }

  getAllFoodItems(): FoodItem[] {
    return this.foodItems;
  }

  getFoodItemById(id: number): FoodItem {
    return this.foodItems
    .filter(food => food.id ==id)
    .pop();
  }

  toggleFoodItemNeeded (foodItem: FoodItem): FoodItem {
    let updatedFoodItem = this.updateFoodItemById(foodItem.id, {
      needed: !foodItem.needed
    });
    return updatedFoodItem;
  }

}
