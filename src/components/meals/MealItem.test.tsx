import { render } from '@testing-library/react';
import { MealItem } from './MealItem';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('MealItem', () => {
  it('renders the MealItem component and its children', async () => {
    const { container } = render(
      <MealItem>
        <MealItem.Details title='item title' description='item description' price={22.99} />
      </MealItem>,
    );

    expect(await axe(container)).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });
});
