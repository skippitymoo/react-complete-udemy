import { FC } from 'react';

export const MealSummary: FC = () => {
  return (
    <section className='meal-summary'>
      <h2 className='meal-summary__title'>Delicious Food, Delivered To You</h2>
      <p className='meal-summary__text'>
        Choose your favourite meal from our broad selection of available meals and enjoy a delicious
        lunch or dinner at home.
      </p>
      <p className='meal-summary__text'>
        All our meals are cooked with high-quality ingredients, just-in-time and of course by
        experienced chefs!
      </p>
    </section>
  );
};
