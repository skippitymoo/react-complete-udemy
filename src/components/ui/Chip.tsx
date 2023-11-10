import React, { JSX } from 'react';

export const Chip = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element => {
  return <div className={`chip ${className ?? ''}`.trim()}>{children}</div>;
};
