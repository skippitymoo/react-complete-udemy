import { JSX } from 'react';
import { CartActions, CartItem as CartItemType, Cart as CartType } from '../menu.types';
import { CartItem } from './CartItem';
import { formatCurrency } from '../../utils/utilities';
import { Button } from '../ui/Button';

type ClickType = 'close' | 'order';

export const Cart = ({
  cartItems,
  onAmountChange,
  onClose,
  onOrder,
}: CartType & CartActions): JSX.Element => {
  const clickHandler = (clickType: ClickType): void => {
    if (clickType === 'order') {
      // TODO: order the items in the cart
      onOrder();
    }
    // TODO: close
    onClose();
  };

  const total = cartItems.reduce((prev, curr) => {
    return prev + curr.amount * curr.meal.price;
  }, 0);

  return (
    <section className='cart'>
      <ul>
        {cartItems.map((item: CartItemType) => (
          <li key={item.meal.id} className='cart__list-item'>
            <CartItem amount={item.amount} meal={item.meal} onAmountChange={onAmountChange} />
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
