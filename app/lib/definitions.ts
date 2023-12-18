export const ItemTypes = {
  BEVERAGE: 'beverage',
  FOOD: 'food',
  OTHER: 'other',
};

export const Location1 = {
  GARAGEFRIDGE: 'Garage Fridge',
  GARAGEFREEZER: 'Garage Freezer',
  KITCHENFREEZER: 'Kitchen Freezer',
  KITCHENFRIDGE: 'Kitchen Fridge',
  KITCHENCABINET: 'Kitchen Cabinet',
  PANTRY: 'Pantry',
};

export const Location2 = {
  TOP: 'Top',
  MIDDLE: 'Middle',
  BOTTOM: 'Bottom',
};

export type Item = {
  id: string;
  name: string;
  description: string;
  type: 'beverage' | 'food' | 'other' | string;
  location_1:
    | 'Garage Fridge'
    | 'Garage Freezer'
    | 'Kitchen Freezer'
    | 'Kitchen Fridge'
    | 'Kitchen Cabinet'
    | 'Pantry'
    | string;
  location_2: 'Top' | 'Middle' | 'Bottom' | string;
  image: string;
  quantity: number;
};
