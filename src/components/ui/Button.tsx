import React, { JSX } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Which style variant to apply?
   */
  variant?: 'primary' | 'secondary';
  /**
   * What size should the button be?
   */
  size?: 'small' | 'normal';
};

export const Button = ({
  children,
  variant = 'primary',
  size = 'normal',
  ...rest
}: ButtonProps): JSX.Element => {
  const sizeClass = size === 'small' ? 'btn--small' : '';

  return (
    <button className={`btn btn-${variant} ${sizeClass}`} {...rest}>
      {children}
    </button>
  );
};
