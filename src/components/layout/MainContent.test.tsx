import { render, screen } from '@testing-library/react';
import { MainContent } from './MainContent';
import { axe, toHaveNoViolations } from 'jest-axe';
import { server } from '../../shared/mocks/msw/server';

expect.extend(toHaveNoViolations);

describe('MainContent', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

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
