import React, { JSX, forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export type DialogProps = React.ComponentPropsWithRef<'dialog'>;

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
  { children },
  ref,
): JSX.Element {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
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
    <dialog ref={dialog} className='dialog'>
      {children}
    </dialog>,
    document?.getElementById('modal')!,
  );
});

export { Dialog };
