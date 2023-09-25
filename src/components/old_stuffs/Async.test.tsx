import { render, screen } from '@testing-library/react';
import Async, { Post } from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    // const fecthMock = window.fetch as jest.MockedFunction<typeof window.fetch>;
    window.fetch = jest.fn();
    (window.fetch as jest.Mock).mockResolvedValueOnce({
      json: async (): Promise<Post[]> => [{ id: 'yeo', text: 'boutye' }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole('listitem');

    expect(listItemElements).not.toHaveLength(0);
  });
});
