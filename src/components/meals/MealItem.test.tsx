import { act, render, screen } from '@testing-library/react';
import { MealItem } from './MealItem';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';

expect.extend(toHaveNoViolations);

describe('MealItem', () => {
  it('renders the MealItem component and its children', async () => {
    const { container } = render(
      <MealItem>
        <MealItem.Details name='item title' description='item description' price={22.99} />
        <MealItem.AddToBasket onAddToBasket={(numberOfItems: number) => {}} />
      </MealItem>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(
      <MealItem>
        <MealItem.Details name='item title' description='item description' price={22.99} />
        <MealItem.AddToBasket onAddToBasket={(numberOfItems: number) => {}} />
      </MealItem>,
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should call the "onAddToBasket" handler when item(s) added', async () => {
    const onAddToBasketFn = jest.fn();

    render(<MealItem.AddToBasket onAddToBasket={onAddToBasketFn} />);

    const input: HTMLInputElement = screen.getByLabelText('Amount');

    await userEvent.type(input, '23');

    const renderedButton = screen.getByRole('button', { name: /Add/ });
    await act(async () => renderedButton.click());

    expect(onAddToBasketFn).toHaveBeenCalledTimes(1);
    expect(onAddToBasketFn).toHaveBeenCalledWith(123);
  });
});
