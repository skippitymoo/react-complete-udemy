import React, { FC } from 'react';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
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

/**
 * A compound component representing a MealItem.
 */
interface ButtonComponent extends FC<ButtonProps> {
  Notification: FC<ButtonNotificationProps>;
}

const ButtonRoot: ButtonComponent = ({
  children,
  variant = 'primary',
  size = 'normal',
  ...rest
}) => {
  const sizeClass = size === 'normal' ? '' : `btn--${size}`;

  return (
    <button {...rest} className={`btn btn--${variant} ${sizeClass} ${rest.className ?? ''}`.trim()}>
      {children}
    </button>
  );
};

const buttonNotification: FC<ButtonNotificationProps> = ({ text }) => (
  <span className={'btn__notification'}>{text}</span>
);
ButtonRoot.Notification = buttonNotification;

export const Button = ButtonRoot;
