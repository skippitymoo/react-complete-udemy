import { JSX } from 'react';
import { CartActions, CartItem as CartItemType } from '../menu.types';
import { CartItem } from './CartItem';
import { formatCurrency } from '../../utils/utilities';
import { Button } from '../ui/Button';

// TODO: remove hard-coded cart
const CART_SELECTIONS: CartItemType[] = [
  {
    amount: 1,
    meal: {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
  },
  {
    amount: 4,
    meal: {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
  },
];

type ClickType = 'close' | 'order';

export const Cart = ({ onClose, onOrder }: CartActions): JSX.Element => {
  const clickHandler = (clickType: ClickType): void => {
    if (clickType === 'order') {
      // TODO: order the items in the cart
      onOrder();
    }
    // TODO: close
    onClose();
  };

  const total = CART_SELECTIONS.reduce((prev, curr) => {
    return prev + curr.amount * curr.meal.price;
  }, 0);

  return (
    <section className='cart'>
      <ul>
        {CART_SELECTIONS.map((item: CartItemType) => (
          <li key={item.meal.id} className='cart__list-item'>
            <CartItem amount={item.amount} meal={item.meal} onAmountChange={() => {}} />
          </li>
        ))}
      </ul>
      <div className='cart__total'>
        <span>Total Amount</span>
        <span>{formatCurrency(total)}</span>
      </div>
      <div className='cart__actions'>
        <Button variant='light' onClick={() => clickHandler('close')}>
          Close
        </Button>
        <Button onClick={() => clickHandler('order')}>Order</Button>
      </div>
    </section>
  );
};
