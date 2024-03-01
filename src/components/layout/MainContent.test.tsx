import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { MainContent } from './MainContent';
import { mockedMealsList } from '../../shared/mocks/mealsData';

expect.extend(toHaveNoViolations);

jest.mock('../../shared/services/meals', () => {
  return {
    fetchMeals: async () => {
      return await Promise.resolve(mockedMealsList);
    },
  };
});

describe('MainContent', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<MainContent />);

    await screen.findByText('Schnitzel');

    expect(await axe(container!)).toHaveNoViolations();
  });

  it('should render with the correct class name', async () => {
    render(<MainContent />);

    const main = await screen.findByRole('main');

    expect(main).toHaveClass('main-container');
  });

  it('should render image', async () => {
    render(<MainContent />);

    const main = await screen.findByRole('img');

    expect(main).toHaveClass('bg-image__image');
  });
});
