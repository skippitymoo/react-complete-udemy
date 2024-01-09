import { JSX, useState } from 'react';
import { CartActions, CartItem as CartItemType, Cart as CartType } from '../menu.types';
import { CartItem } from './CartItem';
import { formatCurrency } from '../../utils/utilities';
import { Button } from '../ui/Button';

type ClickType = 'close' | 'order';

export const Cart = ({
  initialCartItems,
  onCartChange,
  onClose,
  onOrder,
}: CartType & CartActions): JSX.Element => {
  const [cart, setCart] = useState(initialCartItems);
  const clickHandler = (clickType: ClickType): void => {
    if (clickType === 'order') {
      // TODO: order the items in the cart
      onOrder();
    } else if (clickType === 'close') {
      onClose();
    }
  };

  const amountChangeHandler = (mealId: string, changeBy: number): void => {
    setCart((prev: CartItemType[]): CartItemType[] => {
      const updatedCart = [...prev];
      const item = updatedCart.find((i) => i.meal.id === mealId);
      if (item) {
        item.amount += changeBy;
      }

      const totalItems = updatedCart.reduce((prevVal, currVal) => prevVal + currVal.amount, 0);
      onCartChange(totalItems);

      return updatedCart;
    });
  };

  const totalPrice = cart.reduce((prev, curr) => {
    return prev + curr.amount * curr.meal.price;
  }, 0);

  return (
    <section className='cart'>
      <ul>
        {cart.map((item: CartItemType) => (
          <li key={item.meal.id} className='cart__list-item'>
            <CartItem amount={item.amount} meal={item.meal} onAmountChange={amountChangeHandler} />
          </li>
        ))}
      </ul>
      <div className='cart__total'>
        <span>Total Amount</span>
        <span>{formatCurrency(totalPrice)}</span>
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
