import { act, render, screen, waitFor } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Dialog, DialogRef } from './Dialog';
import React from 'react';

expect.extend(toHaveNoViolations);

describe('Dialog', () => {
  let modalContainer: HTMLDivElement;

  /**
   * React Testing Library uses jsdom, which currently does not support HTMLDialogElement
   * https://github.com/testing-library/react-testing-library/issues/1106#issuecomment-1209419325
   * https://github.com/jsdom/jsdom/issues/3294#issuecomment-1268330372
   */
  beforeEach(() => {
    document.body.replaceChildren();
    const modalDiv = document.createElement('div');
    modalDiv.setAttribute('id', 'modal');
    modalContainer = document.body.appendChild(modalDiv);

    const showMock = jest.fn().mockImplementation(function mock(this: HTMLDialogElement) {
      this.setAttribute('open', '');
      this.open = true;
    });

    HTMLDialogElement.prototype.show = showMock;

    HTMLDialogElement.prototype.showModal = showMock;

    HTMLDialogElement.prototype.close = jest.fn().mockImplementation(function mock(
      this: HTMLDialogElement,
    ) {
      this.open = false;
    });
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Dialog>dummy</Dialog>, { container: modalContainer });
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render', async () => {
    const dialogRef = React.createRef<DialogRef>();

    const { container } = render(
      <Dialog ref={dialogRef}>
        <div>yeooo !</div>
      </Dialog>,
      { container: modalContainer },
    );

    await waitFor(() => {
      expect(screen.getByText(/yeooo !/i)).not.toBeVisible();
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
});
