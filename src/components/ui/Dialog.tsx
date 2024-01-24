import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export type DialogProps = {
  initShowModal?: boolean;
} & React.ComponentPropsWithRef<'dialog'>;

export type DialogRef = {
  /**
   * Close the dialog
   */
  close: () => void;
  /**
   * Open the dialog
   */
  open: () => void;
};

const Dialog = forwardRef<DialogRef, DialogProps>(function CustomDialog(
  { initShowModal = false, children, className, ...rest },
  ref,
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (initShowModal) dialog.current?.showModal();
  });

  useImperativeHandle(ref, (): DialogRef => {
    return {
      open() {
        dialog?.current?.showModal();
      },
      close() {
        dialog?.current?.close();
      },
    };
  });

  return createPortal(
    <dialog {...rest} ref={dialog} className={`dialog ${className || ''}`.trim()}>
      {children}
    </dialog>,
    document?.getElementById('modal')!,
  );
});

export { Dialog };
