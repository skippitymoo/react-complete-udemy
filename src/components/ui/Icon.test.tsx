import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';
import { axe, toHaveNoViolations } from 'jest-axe';
import sprite from '../../img/sprite.svg';

expect.extend(toHaveNoViolations);

describe('Icon', () => {
  it('has no accessibility violations', async () => {
    let container;
    ({ container } = render(<Icon href='wha' accessibleName='something' className='yeo' />));

    expect(await axe(container)).toHaveNoViolations();

    ({ container } = render(
      <Icon href='wha' accessibleName='something' className='yeo' decorative={true} />,
    ));

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render with the correct class name', async () => {
    render(<Icon href='wha' accessibleName='something' />);

    const icon = screen.getByRole('img', {});

    expect(icon).toHaveClass('icon');
  });

  it('should render with the class name passed to component', async () => {
    render(<Icon href='wha' accessibleName='something' className='yeo' />);

    const icon = screen.getByRole('img', {});

    expect(icon).toHaveClass('icon yeo');
  });

  it('should render with the correct href', async () => {
    const expectedHref = sprite + '#wha';
    render(<Icon href={expectedHref} accessibleName='something' />);

    const icon = screen.getByRole('img', {});
    // eslint-disable-next-line testing-library/no-node-access
    const hrefElements = icon.parentElement?.querySelectorAll(`[href='${expectedHref}']`) || [];

    expect(hrefElements).toHaveLength(1);
  });

  it('should render title when NOT decorative', async () => {
    const expectedTitle = 'myIconTitle';
    render(<Icon href='wha' accessibleName={expectedTitle} />);

    const title = screen.getByTitle(expectedTitle);

    expect(title).toBeInTheDocument();
  });

  it('should render with aria-hidden when IS decorative', async () => {
    const expectedTitle = 'myIconTitle';
    render(<Icon href='wha' accessibleName={expectedTitle} decorative={true} />);

    const icon = screen.getByRole('img', { hidden: true });

    expect(icon).toBeInTheDocument();
  });
});
