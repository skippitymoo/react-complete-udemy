import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Cart } from './Cart';
import { formatCurrency } from '../../utils/utilities';

expect.extend(toHaveNoViolations);

describe('Cart', () => {
  it('renders', async () => {
    const { container } = render(<Cart onClose={() => {}} onOrder={() => {}} />);

    expect(await axe(container)).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('displays the total', async () => {
    const total = (22.99 * 1) + (16.5 * 4); // TODO: this will change when hard coded menu in Cart is changed
    render(<Cart onClose={() => {}} onOrder={() => {}} />);

    const renderedTotal = screen.getByText(formatCurrency(total));

    expect(renderedTotal).toBeInTheDocument();
  });

  it('calls the "onClose" handler supplied', () => {
    const onClose = jest.fn();

    render(<Cart onClose={onClose} onOrder={() => {}} />);

    const renderedAddButton = screen.getByRole('button', { name: 'Close' });
    renderedAddButton.click();

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls the "onOrder" handler supplied', () => {
    const onOrder = jest.fn();

    render(<Cart onClose={() => {}} onOrder={onOrder} />);

    const renderedAddButton = screen.getByRole('button', { name: 'Order' });
    renderedAddButton.click();

    expect(onOrder).toHaveBeenCalledTimes(1);
  });
});
