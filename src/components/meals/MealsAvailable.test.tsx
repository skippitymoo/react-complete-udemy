import { render } from '@testing-library/react';
import { MealsAvailable } from './MealsAvailable';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Meal } from '../menu.types';

expect.extend(toHaveNoViolations);

const meals: Meal[] = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

describe('MealsAvailable', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<MealsAvailable availableMeals={meals} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render as expected', async () => {
    const { container } = render(<MealsAvailable availableMeals={meals} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
