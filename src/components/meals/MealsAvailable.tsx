import { JSX } from 'react';
import { Meal } from '../menu.types';
import { MealItem } from './MealItem';

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

export const MealsAvailable = (): JSX.Element => {
  return (
    <section className='meals-available'>
      <ul>
        {DUMMY_MEALS.map((meal: Meal) => (
          <li key={meal.id}>
            <MealItem>
              <MealItem.Details
                name={meal.name}
                description={meal.description}
                price={meal.price}
              />
              <MealItem.AddToBasket onAddToBasket={() => {}} />
            </MealItem>
          </li>
        ))}
      </ul>
    </section>
  );
};
