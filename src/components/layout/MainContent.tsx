import { JSX } from 'react';
import mealBgImage from '../../img/meals.jpg';

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
