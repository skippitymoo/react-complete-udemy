import { FC, useEffect, useState } from 'react';
import mealBgImage from '../../img/meals.jpg';
import { Meal } from '../../shared/types/menu.types';
import { MealsAvailable } from '../meals/MealsAvailable';
import { MealSummary } from '../meals/MealSummary';
import { fetchMeals } from '../../shared/services/meals';

export const MainContent: FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [mealsError, setMealsError] = useState<boolean>(false);

  const getMeals = async (): Promise<void> => {
    try {
      const allMeals = await fetchMeals();
      setMeals(allMeals);
    } catch (error) {
      console.error('[MainContent] - problem getting meal menu');
      setMealsError(true);
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <main className='main-container'>
      <div className='bg-image'>
        <img src={mealBgImage} alt='' className='bg-image__image' />
      </div>
      <div className='content'>
        {mealsError && <div>Error!!!!</div>}
        <MealSummary />
        <MealsAvailable availableMeals={meals} />
      </div>
    </main>
  );
};
