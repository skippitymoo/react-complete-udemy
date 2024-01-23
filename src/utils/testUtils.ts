/**
 * React Testing Library uses jsdom, which currently does not support HTMLDialogElement
 * https://github.com/testing-library/react-testing-library/issues/1106#issuecomment-1209419325
 * https://github.com/jsdom/jsdom/issues/3294#issuecomment-1268330372
 */
export const setUpModalContainer = (): HTMLDivElement => {
  document.body.replaceChildren();
  const modalDiv = document.createElement('div');
  modalDiv.setAttribute('id', 'modal');
  const modalContainer = document.body.appendChild(modalDiv);

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

  return modalContainer;
};
