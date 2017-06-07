export class FoodItem {
    id: number;
    title: string = '';
    needed: boolean = false;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}
