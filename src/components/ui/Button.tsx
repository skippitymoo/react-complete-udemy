import React, { JSX } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Which style variant to apply?
   */
  variant?: 'primary' | 'light' | 'dark';
  /**
   * What size should the button be?
   */
  size?: 'small' | 'normal' | 'long';
};

type ButtonNotificationProps = {
  /**
   * Text to display in the notification
   */
  text: string;
};

const ButtonComponent = ({
  children,
  variant = 'primary',
  size = 'normal',
  ...rest
}: ButtonProps): JSX.Element => {
  const sizeClass = size === 'normal' ? '' : `btn--${size}`;

  return (
    <button {...rest} className={`btn btn--${variant} ${sizeClass} ${rest.className ?? ''}`.trim()}>
      {children}
    </button>
  );
};

const buttonNotification = ({ text }: ButtonNotificationProps): JSX.Element => (
  <span className={'btn__notification'}>{text}</span>
);
ButtonComponent.Notification = buttonNotification;

export const Button = ButtonComponent;
