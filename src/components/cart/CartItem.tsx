import { JSX } from 'react';
import { Chip } from '../ui/Chip';
import { Button } from '../ui/Button';
import { CartItemActions, CartItem as CartItemType } from '../menu.types';
import { formatCurrency } from '../../utils/utilities';

export const CartItem = ({
  amount,
  meal,
  onAmountChange,
}: CartItemType & CartItemActions): JSX.Element => {
  const clickHandler = (changeBy: number): void => {
    onAmountChange(changeBy);
  };

  return (
    <div className='cart-item'>
      <div className='cart-item__details'>
        <h3 className='cart-item__title'>{meal.name}</h3>
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
