import { FC, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogProps, DialogRef } from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const DialogWithButtonTemplate: FC<DialogProps> = ({ children, ...rest }) => {
  const refDialog = useRef<DialogRef>(null);
  const clickHandler = (): void => {
    refDialog.current?.open();
  };

  return (
    <>
      <button onClick={clickHandler}>Open the dialog</button>
      <Dialog {...rest} ref={refDialog}>
        {children}
      </Dialog>
    </>
  );
};

export const Default: Story = {
  render: ({ children }) => <DialogWithButtonTemplate>{children}</DialogWithButtonTemplate>,
  args: {
    children: <div>Yeooooooooo!</div>,
  },
};
