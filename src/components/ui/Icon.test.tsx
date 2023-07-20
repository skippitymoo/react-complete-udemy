import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';
import { axe, toHaveNoViolations } from 'jest-axe';
import sprite from '../../img/sprite.svg';

expect.extend(toHaveNoViolations);

describe('Icon', () => {
  it('should render with the correct class name', async () => {
    const { container } = render(<Icon href='wha' accessibleName='something' />);

    const icon = screen.getByRole('img', {});

    expect(icon).toHaveClass('icon');
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render with the correct href', async () => {
    const expectedHref = sprite + '#wha';
    const { container } = render(<Icon href={expectedHref} accessibleName='something' />);

    const icon = screen.getByRole('img', {});
    // eslint-disable-next-line testing-library/no-node-access
    const hrefElements = icon.parentElement?.querySelectorAll(`[href='${expectedHref}']`) || [];

    expect(hrefElements).toHaveLength(1);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render title when NOT decorative', async () => {
    const expectedTitle = 'myIconTitle';
    const { container } = render(<Icon href='wha' accessibleName={expectedTitle} />);

    const title = screen.getByTitle(expectedTitle);

    expect(title).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render with aria-hidden when IS decorative', async () => {
    const expectedTitle = 'myIconTitle';
    const { container } = render(
      <Icon href='wha' accessibleName={expectedTitle} decorative={true} />,
    );

    const icon = screen.getByRole('img', { hidden: true });

    expect(icon).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});
