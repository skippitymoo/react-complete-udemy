import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Cart } from './Cart';
import { CartItem } from '../menu.types';

expect.extend(toHaveNoViolations);

describe('Cart', () => {
  let cartItems: CartItem[] = [];

  beforeEach(() => {
    cartItems = [
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
  });

  it('renders', async () => {
    const { container } = render(
      <Cart
        onCartChange={() => {}}
        initialCartItems={cartItems}
        onClose={() => {}}
        onOrder={() => {}}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Cart
        onCartChange={() => {}}
        initialCartItems={cartItems}
        onClose={() => {}}
        onOrder={() => {}}
      />,
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('displays the total', async () => {
    const user = userEvent.setup();

    render(
      <Cart
        initialCartItems={cartItems}
        onCartChange={() => {}}
        onClose={() => {}}
        onOrder={() => {}}
      />,
    );

    let renderedTotal = screen.getByText('£88.99');
    expect(renderedTotal).toBeInTheDocument();

    // add one more 'Suchi' item (£22.99)
    const renderedAddButtons = screen.getAllByRole('button', { name: '+' });
    await user.click(renderedAddButtons[0]);

    renderedTotal = screen.getByText('£111.98');
    expect(renderedTotal).toBeInTheDocument();

    // remove one more 'Schnitzel' item (£16.50)
    const renderedDecreaseButtons = screen.getAllByRole('button', { name: '−' });
    await user.click(renderedDecreaseButtons[1]);

    renderedTotal = screen.getByText('£95.48');
    expect(renderedTotal).toBeInTheDocument();
  });

  it('calls the "onCartChange" handler', async () => {
    const onCartChange = jest.fn();
    const user = userEvent.setup();

    render(
      <Cart
        initialCartItems={cartItems}
        onCartChange={onCartChange}
        onClose={() => {}}
        onOrder={() => {}}
      />,
    );

    // add button
    const renderedAddButtons = screen.getAllByRole('button', { name: '+' });
    await user.click(renderedAddButtons[0]);

    expect(onCartChange).toHaveBeenCalledTimes(1);
    expect(onCartChange).toHaveBeenLastCalledWith(6);

    await user.click(renderedAddButtons[1]);

    expect(onCartChange).toHaveBeenCalledTimes(2);
    expect(onCartChange).toHaveBeenLastCalledWith(7);

    // decrease button
    const renderedDecreaseButtons = screen.getAllByRole('button', { name: '−' });
    await user.click(renderedDecreaseButtons[0]);

    expect(onCartChange).toHaveBeenCalledTimes(3);
    expect(onCartChange).toHaveBeenLastCalledWith(6);

    await user.click(renderedDecreaseButtons[1]);

    expect(onCartChange).toHaveBeenCalledTimes(4);
    expect(onCartChange).toHaveBeenLastCalledWith(5);
  });

  it('calls the "onClose" handler supplied', async () => {
    const onClose = jest.fn();
    const user = userEvent.setup();

    render(
      <Cart initialCartItems={[]} onCartChange={() => {}} onClose={onClose} onOrder={() => {}} />,
    );

    const renderedCloseButton = screen.getByRole('button', { name: 'Close' });
    await user.click(renderedCloseButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls the "onOrder" handler supplied', async () => {
    const onOrder = jest.fn();
    const user = userEvent.setup();

    render(
      <Cart initialCartItems={[]} onCartChange={() => {}} onClose={() => {}} onOrder={onOrder} />,
    );

    const renderedOrderButton = screen.getByRole('button', { name: 'Order' });
    await user.click(renderedOrderButton);

    expect(onOrder).toHaveBeenCalledTimes(1);
  });
});
