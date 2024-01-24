import React, { FC } from 'react';

export const Card: FC<React.ComponentPropsWithoutRef<'div'>> = ({ className, children }) => {
  return <div className={`card ${className ?? ''}`.trim()}>{children}</div>;
};
