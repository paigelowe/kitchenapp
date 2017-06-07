import { TestBed, inject } from '@angular/core/testing';
import { FoodItem } from './food-item'
import { FoodDataService } from './food-data.service';

describe('FoodDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodDataService]
    });
  });

  it('should ...', inject([FoodDataService], (service: FoodDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllFoodItemService', () => {
    it('should return an empty array by default', inject([FoodDataService], (service: FoodDataService) => {
      expect(service.getAllFoodItems()).toEqual([]);
    }));

    it('should return all food items', inject([FoodDataService], (service: FoodDataService) => {
      let foodItem1 = new FoodItem({ title: 'Twix', needed: false });
      let foodItem2 = new FoodItem({ title: 'Apples', needed: true });
      service.addFoodItem(foodItem1);
      service.addFoodItem(foodItem2);
      expect(service.getAllFoodItems()).toEqual([foodItem1, foodItem2]);
    }));
  });

  describe('#save(foodItem)', () => {
    it('should automatically assign an incrementing id', inject([FoodDataService], (service: FoodDataService) => {
      let foodItem1 = new FoodItem({ title: 'Twix', needed: false });
      let foodItem2 = new FoodItem({ title: 'Apples', needed: true });
      service.addFoodItem(foodItem1);
      service.addFoodItem(foodItem2);
      expect(service.getFoodItemById(1)).toEqual(foodItem1);
      expect(service.getFoodItemById(2)).toEqual(foodItem2);
    }));
  });

  describe('#deleteFoodItemById(id)', () => {
    it('should remove foodItem with the corresponding id', inject([FoodDataService], (service: FoodDataService) => {
      let foodItem1 = new FoodItem({ title: 'Twix', needed: false });
      let foodItem2 = new FoodItem({ title: 'Apples', needed: true });
      service.addFoodItem(foodItem1);
      service.addFoodItem(foodItem2);
      expect(service.getAllFoodItems()).toEqual([foodItem1, foodItem2]);
      service.deleteFoodItemById(1);
      expect(service.getAllFoodItems()).toEqual([foodItem2]);
      service.deleteFoodItemById(2);
      expect(service.getAllFoodItems()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([FoodDataService], (service: FoodDataService) => {
      let foodItem1 = new FoodItem({ title: 'Twix', needed: false });
      let foodItem2 = new FoodItem({ title: 'Apples', needed: true });
      service.addFoodItem(foodItem1);
      service.addFoodItem(foodItem2);
      expect(service.getAllFoodItems()).toEqual([foodItem1, foodItem2]);
      service.deleteFoodItemById(3);
      expect(service.getAllFoodItems()).toEqual([foodItem1, foodItem2]);
    }));
  });

  describe('#updateFoodItem(id, values)', () => {
    it('should return food item with the corresponding id and updated data', inject([FoodDataService], (service: FoodDataService) => {
      let foodItem = new FoodItem({ title: 'Twix', complete: false });
      service.addFoodItem(foodItem);
      let updatedFoodItem = service.updateFoodItemById(1, {
        title: 'Snickers'
      });
      expect(updatedFoodItem.title).toEqual('Snickers');
      expect(service.getFoodItemById(1).title).toEqual('Snickers');
    }));


    it('should return food item and updated data', inject([FoodDataService], (service: FoodDataService) => {
      let foodItem1 = new FoodItem({ title: 'Twix', needed: false });
      service.addFoodItem(foodItem1);
      let updatedFoodItem = service.updateFoodItemById(2, { title: 'Snickers' });
      expect(updatedFoodItem).toEqual(null);
    }));
  });

  describe('#toggleFoodItemNeeded(foodItem)', () => {
    it('should return false when a true food item is toggled', inject([FoodDataService], (service: FoodDataService) => {
      let foodItem1 = new FoodItem({ title: 'Twix', needed: false });
      service.addFoodItem(foodItem1);
      service.toggleFoodItemNeeded(foodItem1);
      expect(service.getFoodItemById(1).needed).toEqual(true);
    }));
  });
});
