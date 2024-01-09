import { render, screen } from '@testing-library/react';
import { HeaderCartButton } from './HeaderCartButton';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('HeaderCartButton', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<HeaderCartButton text='dummy' itemCount={1} />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render if all props are provided', () => {
    const text = 'Your Cart';
    const numberOfItems = 5;

    render(<HeaderCartButton text={text} itemCount={numberOfItems} />);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(numberOfItems)).toBeInTheDocument();
  });

  it('should render with the correct class name', () => {
    render(<HeaderCartButton text='dummy' itemCount={1} />);
    const renderedButton = screen.getByRole('img', { hidden: true });

    expect(renderedButton).toHaveClass('header-cart-button__icon');
  });
});
