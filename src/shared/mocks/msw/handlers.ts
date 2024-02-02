import { http, HttpResponse } from 'msw';
import { Meal } from '../../types/menu.types';

const allMeals: Meal[] = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

export const handlers = [
  http.get('https://sec12exercise.foodorderapp.com/meals', () => {
    // Response resolver allows you to react to captured requests,
    // respond with mock responses or passthrough requests entirely.
    console.log('Captured a "GET /meals" request');

    return HttpResponse.json(allMeals);
  }),
];
