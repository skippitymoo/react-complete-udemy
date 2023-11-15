import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { CartItem } from './CartItem';
import { Meal } from '../menu.types';

expect.extend(toHaveNoViolations);

describe('CartItem', () => {
  it('renders all the props', async () => {
    const meal: Meal = {
      id: 'dummy',
      name: 'Schnitzel',
      description: 'dummy',
      price: 16.5,
    };
    const { container } = render(<CartItem meal={meal} amount={4} />);

    expect(await axe(container)).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });
});
