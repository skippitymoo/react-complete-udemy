import { JSX, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Cart } from './Cart';
import { DialogRef } from '../ui/Dialog';
import { CartProps } from '../menu.types';

const meta: Meta<typeof Cart> = {
  title: 'Cart/Cart',
  component: Cart,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const CartModalWithButtonTemplate = (props: CartProps): JSX.Element => {
  const refDialog = useRef<DialogRef>(null);
  const clickHandler = (): void => {
    refDialog.current?.open();
  };

  return (
    <>
      <button onClick={clickHandler}>Cart component is a modal. Click to open</button>
      <Cart {...props} ref={refDialog} />
    </>
  );
};

export const Default: Story = {
  render: ({ ...props }) => <CartModalWithButtonTemplate {...props} />,
  args: {
    initialCartItems: [
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
    ],
  },
};
