import React, { FC } from 'react';

export const Chip: FC<React.ComponentPropsWithoutRef<'span'>> = ({ className, children }) => {
  return <span className={`chip ${className ?? ''}`.trim()}>{children}</span>;
};
