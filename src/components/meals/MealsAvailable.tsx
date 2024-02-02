import { FC } from 'react';
import { Meal, MealsAvailable as MealsAvailableType } from '../../shared/types/menu.types';
import { MealItem } from './MealItem';

export const MealsAvailable: FC<MealsAvailableType> = ({ availableMeals }) => {
  return (
    <section className='meals-available'>
      <ul>
        {availableMeals.map((meal: Meal) => (
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
