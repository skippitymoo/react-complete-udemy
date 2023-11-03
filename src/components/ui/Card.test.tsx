import { render } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
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
