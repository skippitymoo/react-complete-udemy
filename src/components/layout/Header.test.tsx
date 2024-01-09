import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Header } from './Header';

expect.extend(toHaveNoViolations);

describe('Header', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Header />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render the header text', () => {
    render(<Header />);

    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent('ReactMeals');
    expect(h1).toHaveClass('header__title');
    expect(screen.getByText('Your Cart')).toBeInTheDocument();
  });
});
