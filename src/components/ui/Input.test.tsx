import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Input } from './Input';
import userEvent from '@testing-library/user-event';

expect.extend(toHaveNoViolations);

describe('Input', () => {
  it('renders all the props', async () => {
    const { container } = render(<Input label='label yeo' className='yeo-class' />);

    expect(await axe(container)).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('handles input', async () => {
    const handleChangeFn = jest.fn();
    render(<Input label='Name' onChange={(e) => handleChangeFn(e.target.value)} />);

    const input: HTMLInputElement = screen.getByLabelText('Name');
    expect(input.value).toBe('');

    await userEvent.type(input, 'Joe Casual');

    expect(input.value).toBe('Joe Casual');
    expect(input).not.toBeInvalid();
    expect(handleChangeFn).toBeCalledWith('Joe Casual');
  });
});
