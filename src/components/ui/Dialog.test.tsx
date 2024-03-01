import { act, render, screen, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import React from 'react';
import { Dialog, DialogRef } from './Dialog';
import { setUpModalContainer } from '../../utils/testUtils';

expect.extend(toHaveNoViolations);

describe('Dialog', () => {
  let modalContainer: HTMLDivElement;

  beforeEach(() => {
    modalContainer = setUpModalContainer();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Dialog>dummy</Dialog>, { container: modalContainer });
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render', async () => {
    const dialogRef = React.createRef<DialogRef>();

    const { container } = render(
      <Dialog ref={dialogRef} className='random-class'>
        <div data-testid='my-text'>yeooo !</div>
      </Dialog>,
      { container: modalContainer },
    );

    act(() => {
      dialogRef.current?.open();
    });

    await waitFor(() => {
      expect(screen.getByTestId('my-text')).toHaveTextContent('yeooo !');
    });

    expect(container).toMatchSnapshot();
  });

  it('should be visible when dialog open', async () => {
    const dialogRef = React.createRef<DialogRef>();

    const { container } = render(
      <Dialog ref={dialogRef}>
        <div>yeooo !</div>
      </Dialog>,
      { container: modalContainer },
    );

    act(() => {
      dialogRef.current?.open();
    });

    await waitFor(() => {
      expect(screen.getByText(/yeooo !/i)).toBeVisible();
    });

    expect(container).toMatchSnapshot();
  });

  it('should not be visible when dialog closed', async () => {
    const dialogRef = React.createRef<DialogRef>();

    const { container } = render(
      <Dialog ref={dialogRef}>
        <div>yeooo !</div>
      </Dialog>,
      { container: modalContainer },
    );

    act(() => {
      dialogRef.current?.open();
    });

    await waitFor(() => {
      expect(screen.getByText(/yeooo !/i)).toBeVisible();
    });

    act(() => {
      dialogRef.current?.close();
    });

    await waitFor(() => {
      expect(screen.getByText(/yeooo !/i)).not.toBeVisible();
    });

    expect(container).toMatchSnapshot();
  });

  it('should initially open dialog', async () => {
    render(
      <Dialog initShowModal={true}>
        <div>yeooo !</div>
      </Dialog>,
      { container: modalContainer },
    );

    await waitFor(() => {
      expect(screen.getByText(/yeooo !/i)).toBeVisible();
    });
  });
});
