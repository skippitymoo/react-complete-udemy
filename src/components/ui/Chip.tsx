import React, { JSX } from 'react';

export const Chip = ({
  className,
  children,
}: React.ComponentPropsWithoutRef<'span'>): JSX.Element => {
  return <span className={`chip ${className ?? ''}`.trim()}>{children}</span>;
};
