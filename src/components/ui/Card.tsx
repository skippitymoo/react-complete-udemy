import React, { JSX } from 'react';

export const Card = ({
  className,
  children,
}: React.ComponentPropsWithoutRef<'div'>): JSX.Element => {
  return <div className={`card ${className ?? ''}`.trim()}>{children}</div>;
};
