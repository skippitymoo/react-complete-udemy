import { JSX } from 'react';
import { HeaderCartButton } from './HeaderCartButton';

export const Header = (): JSX.Element => {
  return (
    <header className='header'>
      <h1 className='header__title'>ReactMeals</h1>
      <HeaderCartButton text='Your Cart' itemCount={0} />
    </header>
  );
};
