import { render, screen } from '@testing-library/react';
import { MainContent } from './MainContent';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('MainContent', () => {
  it('should pass axe', async () => {
    const { container } = render(<MainContent />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render with the correct class name', () => {
    render(<MainContent />);

    const main = screen.getByRole('main');

    expect(main).toHaveClass('main-container');
  });

  it('should render image', () => {
    render(<MainContent />);

    const main = screen.getByRole('img');

    expect(main).toHaveClass('bg-image__image');
  });
});
