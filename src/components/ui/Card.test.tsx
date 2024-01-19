import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Card } from './Card';

expect.extend(toHaveNoViolations);

describe('Card', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Card>dummy</Card>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render the class(es) and children provided', () => {
    const { container } = render(
      <Card className='test-class test-class__yeo'>
        <div>Yeooo</div>
        <div>Yeooo 2</div>
      </Card>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
