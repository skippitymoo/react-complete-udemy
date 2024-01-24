import React, { FC } from 'react';

type IconProps = React.ComponentPropsWithoutRef<'svg'> & {
  /**
   * Accessible name when icon conveys info, is not decorative (also revealed as a native HTML tooltip on mouse hover)
   */
  accessibleName?: string;
  /**
   * Is the icon decorative
   */
  decorative?: boolean;
};

export const Icon: FC<IconProps> = ({
  href,
  className,
  accessibleName,
  decorative = false,
  ...rest
}) => {
  return (
    <svg
      {...rest}
      role='img'
      className={`icon ${className ?? ''}`.trim()}
      focusable='false'
      {...(decorative ? { 'aria-hidden': true } : {})}
    >
      {decorative || <title>{accessibleName}</title>}
      <use href={href} aria-hidden='true'></use>
    </svg>
  );
};
