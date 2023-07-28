import React, { JSX } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Which style variant to apply?
   */
  variant?: 'primary' | 'light' | 'dark';
  /**
   * What size should the button be?
   */
  size?: 'small' | 'normal';
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
  const sizeClass = size === 'small' ? 'btn--small' : '';
  const className = `btn btn--${variant} ${sizeClass} ${rest.className ? rest.className : ''}`;

  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};

const buttonNotification = ({ text }: ButtonNotificationProps): JSX.Element => (
  <span className={'btn__notification'}>{text}</span>
);
ButtonComponent.Notification = buttonNotification;

export const Button = ButtonComponent;
