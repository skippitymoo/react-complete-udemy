import { render, screen } from '@testing-library/react';
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
        onAmountChange={() => {}}
        cartItems={cartItems}
        onClose={() => {}}
        onOrder={() => {}}
      />,
    );

    expect(await axe(container)).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('displays the total', async () => {
    render(
      <Cart
        cartItems={cartItems}
        onAmountChange={() => {}}
        onClose={() => {}}
        onOrder={() => {}}
      />,
    );

    let renderedTotal = screen.getByText('£88.99');

    expect(renderedTotal).toBeInTheDocument();
  });

  it('calls the "onAmountChange" handler', async () => {
    const onAmountChange = jest.fn();

    render(
      <Cart
        cartItems={cartItems}
        onAmountChange={onAmountChange}
        onClose={() => {}}
        onOrder={() => {}}
      />,
    );

    // add button
    const renderedAddButtons = screen.getAllByRole('button', { name: '+' });
    renderedAddButtons[0].click();

    expect(onAmountChange).toHaveBeenCalledTimes(1);
    expect(onAmountChange).toHaveBeenLastCalledWith('m1', 1);

    renderedAddButtons[1].click();

    expect(onAmountChange).toHaveBeenCalledTimes(2);
    expect(onAmountChange).toHaveBeenLastCalledWith('m2', 1);

    // decrease button
    const renderedDecreaseButtons = screen.getAllByRole('button', { name: '−' });
    renderedDecreaseButtons[0].click();

    expect(onAmountChange).toHaveBeenCalledTimes(3);
    expect(onAmountChange).toHaveBeenLastCalledWith('m1', -1);

    renderedDecreaseButtons[1].click();

    expect(onAmountChange).toHaveBeenCalledTimes(4);
    expect(onAmountChange).toHaveBeenLastCalledWith('m2', -1);
  });

  it('calls the "onClose" handler supplied', () => {
    const onClose = jest.fn();

    render(<Cart cartItems={[]} onAmountChange={() => {}} onClose={onClose} onOrder={() => {}} />);

    const renderedCloseButton = screen.getByRole('button', { name: 'Close' });
    renderedCloseButton.click();

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls the "onOrder" handler supplied', () => {
    const onOrder = jest.fn();

    render(<Cart cartItems={[]} onAmountChange={() => {}} onClose={() => {}} onOrder={onOrder} />);

    const renderedOrderButton = screen.getByRole('button', { name: 'Order' });
    renderedOrderButton.click();

    expect(onOrder).toHaveBeenCalledTimes(1);
  });
});
