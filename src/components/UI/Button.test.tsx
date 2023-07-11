import { render, screen } from '@testing-library/react';
import { isInaccessible } from '@testing-library/dom';
import { Button } from './Button';

describe('Button', () => {
  it('should render the text provided', () => {
    const label = 'yeooo !';

    render(<Button>{label}</Button>);

    const renderedButton = screen.getByRole('button', { name: new RegExp(label, 'i') });

    expect(renderedButton).toBeInTheDocument();
    expect(isInaccessible(renderedButton)).toBe(false);
  });

  it('should render with the correct class name for primary button', () => {
    const label = 'yeooo !';

    render(<Button>{label}</Button>);

    const renderedButton = screen.getByRole('button', { name: new RegExp(label, 'i') });

    expect(renderedButton).toHaveClass('btn btn-primary');
  });

  it('should render with the correct class name for secondary button', () => {
    const label = 'yeooo !';

    render(<Button variant='secondary'>{label}</Button>);

    const renderedButton = screen.getByRole('button', { name: new RegExp(label, 'i') });

    expect(renderedButton).toHaveClass('btn btn-secondary');
  });

  it('should render with the correct class name for normal button', () => {
    const label = 'yeooo !';

    render(<Button size='normal'>{label}</Button>);

    const renderedButton = screen.getByRole('button', { name: new RegExp(label, 'i') });

    expect(renderedButton).toHaveClass('btn btn-primary');
  });

  it('should render with the correct class name for small button', () => {
    const label = 'yeooo !';

    render(<Button size='small'>{label}</Button>);

    const renderedButton = screen.getByRole('button', { name: new RegExp(label, 'i') });

    expect(renderedButton).toHaveClass('btn btn-primary btn--small');
  });

  it('should call the "onClick" handler supplied', () => {
    const label = 'yeooo !';
    const onClick = jest.fn();

    render(<Button onClick={onClick}>{label}</Button>);

    const renderedButton = screen.getByRole('button', { name: new RegExp(label, 'i') });
    renderedButton.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
