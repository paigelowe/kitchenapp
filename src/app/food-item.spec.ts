import {FoodItem} from './food-item';

describe('FoodItem', () => {
  it('should create an instance', () => {
    expect(new FoodItem()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let foodItem = new FoodItem({
      title: 'Tilamoo',
      needed: true
    });
    expect(foodItem.title).toEqual('Tilamoo');
    expect(foodItem.needed).toEqual(true);
  });
});
