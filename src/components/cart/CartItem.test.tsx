import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { CartItem } from './CartItem';
import { Meal } from '../menu.types';

expect.extend(toHaveNoViolations);

describe('CartItem', () => {
  const meal: Meal = {
    id: 'dummy',
    name: 'Schnitzel',
    description: 'not displayed',
    price: 16.5,
  };

  it('renders all the props', async () => {
    const { container } = render(<CartItem meal={meal} amount={4} onAmountChange={() => {}} />);

    expect(await axe(container)).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('"onAmountChange" handler', () => {
    const onHandler = jest.fn();

    beforeEach(() => {
      jest.resetAllMocks();
    });

    it('should recieve an increment', () => {
      render(<CartItem meal={meal} amount={0} onAmountChange={onHandler} />);

      const renderedAddButton = screen.getByRole('button', { name: '+' });
      renderedAddButton.click();

      expect(onHandler).toHaveBeenCalledTimes(1);
      expect(onHandler).toHaveBeenLastCalledWith(1);
    });

    it('should recieve a decrement', () => {
      render(<CartItem meal={meal} amount={0} onAmountChange={onHandler} />);

      const renderedMinusButton = screen.getByRole('button', { name: '−' });
      renderedMinusButton.click();

      expect(onHandler).toHaveBeenCalledTimes(1);
      expect(onHandler).toHaveBeenLastCalledWith(-1);
    });
  });
});
