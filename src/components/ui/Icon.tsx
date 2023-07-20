import { JSX } from 'react';

type IconProps = {
  /**
   * Href for the icon
   */
  href: string;
  /**
   * Accessible name when icon conveys info, is not decorative (also revealed as a native HTML tooltip on mouse hover)
   */
  accessibleName?: string;
  /**
   * Is the icon decorative
   */
  decorative?: boolean;
};

export const Icon = ({ href, accessibleName, decorative = false }: IconProps): JSX.Element => {
  return (
    <svg
      role='img'
      className='icon'
      focusable='false'
      {...(decorative ? { 'aria-hidden': true } : {})}
    >
      {decorative || <title>{accessibleName}</title>}
      <use href={href} aria-hidden='true'></use>
    </svg>
  );
};
