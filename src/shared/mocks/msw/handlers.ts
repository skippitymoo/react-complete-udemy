import { http, HttpResponse } from 'msw';
import { Meal } from '../../types/menu.types';
import { mockedMealsList } from '../mealsData';

const allMeals: Meal[] = mockedMealsList;

export const handlers = [
  http.get('https://sec12exercise.foodorderapp.com/meals', () => {
    // Response resolver allows you to react to captured requests,
    // respond with mock responses or passthrough requests entirely.
    console.log('Captured a "GET /meals" request');

    return HttpResponse.json(allMeals);
  }),
];
