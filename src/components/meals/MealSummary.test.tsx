import { render } from '@testing-library/react';
import { MealSummary } from './MealSummary';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('MealSummary', () => {
  it('should pass axe', async () => {
    const { container } = render(<MealSummary />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render as expected', async () => {
    const { container } = render(<MealSummary />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
