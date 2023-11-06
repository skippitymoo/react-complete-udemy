import { render } from '@testing-library/react';
import { MealsAvailable } from './MealsAvailable';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('MealsAvailable', () => {
  it('should pass axe', async () => {
    const { container } = render(<MealsAvailable />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render as expected', async () => {
    const { container } = render(<MealsAvailable />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
