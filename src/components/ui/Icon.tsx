import React, { JSX } from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & {
  /**
   * Accessible name when icon conveys info, is not decorative (also revealed as a native HTML tooltip on mouse hover)
   */
  accessibleName?: string;
  /**
   * Is the icon decorative
   */
  decorative?: boolean;
};

export const Icon = ({
  href,
  className,
  accessibleName,
  decorative = false,
  ...rest
}: IconProps): JSX.Element => {
  className = 'icon' + (className ? ` ${className}` : '');

  return (
    <svg
      {...rest}
      role='img'
      className={className}
      focusable='false'
      {...(decorative ? { 'aria-hidden': true } : {})}
    >
      {decorative || <title>{accessibleName}</title>}
      <use href={href} aria-hidden='true'></use>
    </svg>
  );
};
