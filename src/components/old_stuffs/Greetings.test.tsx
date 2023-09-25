import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greetings from './Greetings';

describe('Greetings component', () => {
  test('renders Hello World as a text', () => {
    render(<Greetings />);

    const element = screen.getByText('Hello World', { exact: false });

    expect(element).toBeInTheDocument();
  });

  test("renders It's good to see you if the button was NOT clicked", () => {
    render(<Greetings />);

    const element = screen.getByText("It's good to see you");

    expect(element).toBeInTheDocument();
  });

  test('renders if the button IS clicked', async () => {
    render(<Greetings />);

    let elementChangedText = screen.queryByText('Changed!');

    expect(elementChangedText).toBeNull();

    const elementButton = screen.getByRole('button');

    await userEvent.click(elementButton);

    elementChangedText = await screen.findByText('Changed!');
    const elementOriginalText = screen.queryByText("It's good to see you");

    expect(elementChangedText).toBeInTheDocument();
    expect(elementOriginalText).toBeNull();

    // second click and text is still 'Changed!'
    await userEvent.click(elementButton);

    elementChangedText = await screen.findByText('Changed!');

    expect(elementChangedText).toBeInTheDocument();
  });
});
