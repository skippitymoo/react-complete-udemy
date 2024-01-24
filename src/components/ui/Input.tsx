import React, { FC, useId } from 'react';

type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  /**
   * The label for the input
   */
  label: string;
};

export const Input: FC<InputProps> = ({ label, className, ...rest }) => {
  const id = useId();

  return (
    <div className='form__group'>
      <label htmlFor={id} className='form__label'>
        {label}
      </label>
      <input {...rest} id={id} className={`form__input ${className ?? ''}`.trim()} />
    </div>
  );
};
