import { render, screen } from '@testing-library/react';
import Greetings from './Greetings';

test('renders Hello World as a text', () => {
  render(<Greetings />);

  const element = screen.getByText('Hello World', { exact: false });

  expect(element).toBeInTheDocument();
});
