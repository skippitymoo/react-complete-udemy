import { JSX } from 'react';
import { Chip } from '../ui/Chip';
import { Button } from '../ui/Button';
import { CartItemChange, CartItem as CartItemType } from '../menu.types';
import { formatCurrency } from '../../utils/utilities';

export const CartItem = ({
  amount,
  meal,
  onAmountChange,
}: CartItemType & CartItemChange): JSX.Element => {
  const clickHandler = (changeBy: number): void => {
    onAmountChange(changeBy);
  };

  return (
    <div className='cart-item'>
      <div className='cart-item__details'>
        <div className='cart-item__title'>{meal.name}</div>
        <span className='cart-item__price'>{formatCurrency(meal.price)}</span>
        <Chip className='cart-item__amount'>{`x ${amount}`}</Chip>
      </div>
      <div className='cart-item__actions'>
        <Button size='small' variant='light' onClick={() => clickHandler(-1)}>
          &minus;
        </Button>
        <Button size='small' variant='light' onClick={() => clickHandler(1)}>
          +
        </Button>
      </div>
    </div>
  );
};
