import React, { JSX, useId } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * The label for the input
   */
  label: string;
};

export const Input = ({ label, className, ...rest }: InputProps): JSX.Element => {
  const id = useId();
  className = className ?? '';

  return (
    <div className='form__group'>
      <label htmlFor={id} className='form__label'>
        {label}
      </label>
      <input {...rest} id={id} className={`form__input ${className}`} />
    </div>
  );
};
