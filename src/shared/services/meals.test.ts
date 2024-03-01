import { server } from '../mocks/msw/server';
import { fetchMeals } from './meals';

describe('meals service', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('fetches meals', async () => {
    const meals = await fetchMeals();

    expect(meals.length > 0).toBeTruthy();
  });
});
