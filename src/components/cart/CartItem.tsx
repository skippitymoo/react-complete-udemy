import { JSX } from 'react';
import { Chip } from '../ui/Chip';
import { Button } from '../ui/Button';
import { CartItem as CartItemType } from '../menu.types';

export const CartItem = ({ amount, meal }: CartItemType): JSX.Element => {
  return (
    <div className='cart-item'>
      <div className='cart-item__details'>
        <div className='cart-item__title'>{meal.name}</div>
        <span className='cart-item__price'>{meal.price}</span>
        <Chip className='cart-item__amount'>{`x ${amount}`}</Chip>
      </div>
      <div className='cart-item__actions'>
        <Button size='small' variant='light'>
          &minus;
        </Button>
        <Button size='small' variant='light'>
          +
        </Button>
      </div>
    </div>
  );
};
