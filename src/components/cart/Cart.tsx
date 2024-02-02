import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { CartItem as CartItemType, CartProps } from '../../shared/types/menu.types';
import { CartItem } from './CartItem';
import { formatCurrency } from '../../utils/utilities';
import { Button } from '../ui/Button';
import { Dialog, DialogRef } from '../ui/Dialog';

type ClickType = 'close' | 'order';

export const Cart = forwardRef<DialogRef, CartProps>(function CartModal(
  { initialCartItems, onCartChange, onOrder },
  ref,
) {
  const [cart, setCart] = useState(initialCartItems);
  const dialogRef = useRef<DialogRef>(null);

  useImperativeHandle(ref, (): DialogRef => dialogRef.current!);

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

  const actionHandler = (clickType: ClickType): void => {
    if (clickType === 'order') {
      // TODO: order the items in the cart
      onOrder();
    } else if (clickType === 'close') {
      dialogRef.current?.close();
    }
  };

  const totalPrice = cart.reduce((prev, curr) => {
    return prev + curr.amount * curr.meal.price;
  }, 0);

  return (
    <Dialog
      ref={dialogRef!}
      aria-labelledby='Cart Summary'
      aria-describedby='Adjust items in your cart and order when ready'
      onClose={actionHandler.bind(null, 'close')}
    >
      <section className='cart'>
        <ul>
          {cart.map((item: CartItemType) => (
            <li key={item.meal.id} className='cart__list-item'>
              <CartItem
                amount={item.amount}
                meal={item.meal}
                onAmountChange={amountChangeHandler}
              />
            </li>
          ))}
        </ul>
        <div className='cart__total'>
          <span>Total Amount</span>
          <span>{formatCurrency(totalPrice)}</span>
        </div>
        <div className='cart__actions'>
          <Button variant='light' onClick={actionHandler.bind(null, 'close')}>
            Close
          </Button>
          <Button onClick={actionHandler.bind(null, 'order')}>Order</Button>
        </div>
      </section>
    </Dialog>
  );
});
