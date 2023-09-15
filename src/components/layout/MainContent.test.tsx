import { render } from '@testing-library/react';
import { MainContent } from './MainContent';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('MainContent', () => {
  it('should pass axe', async () => {
    const { container } = render(<MainContent />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
