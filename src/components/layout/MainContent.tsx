import { JSX } from 'react';
import mealBgImage from '../../img/meals.jpg';
import { Meal } from '../menu.types';

// TODO: serve meal items via an API
// this will be passed to the MealsAvailable component
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const DUMMY_MEALS: Meal[] = [
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

export const MainContent = (): JSX.Element => {
  return (
    <main className='main-container'>
      <div className='bg-image'>
        <img src={mealBgImage} alt='' className='bg-image__image' />
      </div>
      <div className='content'></div>
    </main>
  );
};
