import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Button>dummy</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render the text provided', () => {
    const label = 'yeooo !';

    render(<Button>{label}</Button>);

    const renderedButton = screen.getByRole('button', { name: label });

    expect(renderedButton).toBeInTheDocument();
  });

  it('should render with the correct class name for primary button', () => {
    const label = 'yeooo !';

    render(<Button>{label}</Button>);

    const renderedButton = screen.getByRole('button', { name: label });

    expect(renderedButton).toHaveClass('btn btn--primary');
  });

  it('should render with the correct class name for light button', () => {
    const label = 'yeooo !';

    render(<Button variant='light'>{label}</Button>);

    const renderedButton = screen.getByRole('button', { name: label });

    expect(renderedButton).toHaveClass('btn btn--light');
  });

  it('should render with the correct class name for dark button', () => {
    const label = 'yeooo !';

    render(<Button variant='dark'>{label}</Button>);

    const renderedButton = screen.getByRole('button', { name: label });

    expect(renderedButton).toHaveClass('btn btn--dark');
  });

  it('should render with the correct class name for normal button', () => {
    const label = 'yeooo !';

    render(<Button size='normal'>{label}</Button>);

    const renderedButton = screen.getByRole('button', { name: label });

    expect(renderedButton).toHaveClass('btn btn--primary');
  });

  it('should render with the correct class name for small button', () => {
    const label = 'yeooo !';

    render(<Button size='small'>{label}</Button>);

    const renderedButton = screen.getByRole('button', { name: label });

    expect(renderedButton).toHaveClass('btn btn--primary btn--small');
  });

  it('should render with the correct class name for long button', () => {
    const label = 'yeooo !';

    render(<Button size='long'>{label}</Button>);

    const renderedButton = screen.getByRole('button', { name: label });

    expect(renderedButton).toHaveClass('btn btn--primary btn--long');
  });

  it('should render with the class name passed to component', () => {
    const label = 'yeooo !';

    render(<Button className='wah'>{label}</Button>);

    const renderedButton = screen.getByRole('button', { name: label });

    expect(renderedButton).toHaveClass('btn btn--primary wah');
  });

  it('should call the "onClick" handler supplied', () => {
    const label = 'yeooo !';
    const onClick = jest.fn();

    render(<Button onClick={onClick}>{label}</Button>);

    const renderedButton = screen.getByRole('button', { name: label });
    renderedButton.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
